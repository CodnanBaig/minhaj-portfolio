const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const QUALITY = 80; // JPEG quality
const WEBP_QUALITY = 85; // WebP quality
const MAX_WIDTH = 1920; // Maximum width for images
const MAX_HEIGHT = 1080; // Maximum height for images

// Create optimized folder
const createOptimizedFolder = (folderPath) => {
  const optimizedPath = folderPath.replace('public/', 'public/optimized/');
  if (!fs.existsSync(optimizedPath)) {
    fs.mkdirSync(optimizedPath, { recursive: true });
  }
  return optimizedPath;
};

// Optimize a single image
const optimizeImage = async (inputPath, outputPath) => {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Calculate new dimensions while maintaining aspect ratio
    let { width, height } = metadata;
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      const ratio = Math.min(MAX_WIDTH / width, MAX_HEIGHT / height);
      width = Math.round(width * ratio);
      height = Math.round(height * ratio);
    }
    
    // Resize and optimize
    await image
      .resize(width, height, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(outputPath);
    
    // Also create WebP version
    const webpPath = outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    await image
      .resize(width, height, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY })
      .toFile(webpPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(inputPath);
    const compressionRatio = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ Optimized: ${path.basename(inputPath)} (${compressionRatio}% smaller)`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
};

// Process all images in a folder
const processFolder = async (folderPath) => {
  const optimizedPath = createOptimizedFolder(folderPath);
  const files = fs.readdirSync(folderPath);
  
  console.log(`\n📁 Processing: ${folderPath}`);
  
  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isDirectory()) {
      await processFolder(filePath);
    } else if (/\.(jpg|jpeg|png|HEIC)$/i.test(file)) {
      const outputPath = path.join(optimizedPath, file.replace(/\.(HEIC)$/i, '.jpg'));
      await optimizeImage(filePath, outputPath);
    }
  }
};

// Main execution
const main = async () => {
  console.log('🚀 Starting image optimization...');
  
  const publicPath = 'public';
  const folders = fs.readdirSync(publicPath).filter(folder => 
    fs.statSync(path.join(publicPath, folder)).isDirectory()
  );
  
  for (const folder of folders) {
    const folderPath = path.join(publicPath, folder);
    await processFolder(folderPath);
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log('📁 Optimized images are in: public/optimized/');
};

main().catch(console.error);
