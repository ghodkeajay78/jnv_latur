# JNV Latur Website - S3 + CloudFront Deployment Guide

This guide will help you deploy the JNV Latur website to AWS S3 with CloudFront CDN, following the approach described in the [Medium article](https://medium.com/swlh/how-to-efficiently-host-your-web-applications-ui-on-s3-buckets-through-aws-cloudfront-156838f4b287).

## 🚀 Quick Start

### 1. Build the Application
```bash
npm run build
```
This creates a `dist` folder with all static files ready for S3 deployment.

### 2. AWS S3 Setup

#### Create S3 Bucket
1. Go to [AWS S3 Console](https://s3.console.aws.amazon.com/)
2. Click "Create bucket"
3. Choose a unique bucket name (e.g., `jnv-latur-website`)
4. Select your preferred region
5. **Important**: Keep "Block all public access" **ENABLED** (we'll use CloudFront for access)

#### Upload Files
1. Navigate to your bucket
2. Upload all files from the `dist` folder to the root of the bucket
3. Ensure `index.html` is in the root directory

#### Enable Static Website Hosting
1. Go to Properties → Static website hosting
2. Enable "Use this bucket to host a website"
3. Set `index.html` as the Index document
4. Set `index.html` as the Error document (for SPA routing)

### 3. CloudFront Setup

#### Create CloudFront Distribution
1. Go to [CloudFront Console](https://console.aws.amazon.com/cloudfront/)
2. Click "Create distribution"
3. Configure the following:

**Origin Settings:**
- Origin Domain: `your-bucket-name.s3.amazonaws.com`
- Restrict Bucket Access: **Yes**
- Origin Access Identity: **Create a new identity**
- Grant Read Permissions on Bucket: **Yes, Update bucket policy**

**Default Cache Behavior:**
- Viewer Protocol Policy: **Redirect HTTP to HTTPS**
- Allowed HTTP Methods: **GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE**
- Cache Policy: **CachingDisabled** (for development) or **Managed-CachingOptimized** (for production)

**Settings:**
- Default Root Object: `index.html`
- Price Class: Choose based on your needs

#### Custom Error Pages (Important for SPA)
1. Go to Error Pages tab
2. Create Custom Error Response:
   - HTTP Error Code: `403`
   - Error Caching Minimum TTL: `0`
   - Customize Error Response: **Yes**
   - Response Page Path: `/index.html`
   - HTTP Response Code: `200`
3. Create another for `404` errors with same settings

### 4. Domain Setup (Optional)

#### Route 53 Configuration
1. Go to [Route 53 Console](https://console.aws.amazon.com/route53/)
2. Create a hosted zone for your domain
3. Create an A record pointing to your CloudFront distribution
4. Update CloudFront distribution with your custom domain

## 📁 File Structure for S3

After building, your `dist` folder should contain:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   ├── index-[hash].js
│   ├── ui-[hash].js
│   └── vendor-[hash].js
└── favicon.ico (if present)
```

## 🔧 Configuration Changes Made

### Removed Server Dependencies
- ✅ Express.js server
- ✅ Database connections (Drizzle ORM)
- ✅ React Query for API calls
- ✅ Server-side authentication

### Updated for Static Hosting
- ✅ All data is now static (imported from `static-data.ts`)
- ✅ Contact form simulates submission (can integrate with Formspree/EmailJS)
- ✅ Build configuration optimized for static files
- ✅ SPA routing support with CloudFront error pages

### Build Optimization
- ✅ Code splitting for better performance
- ✅ Asset optimization and minification
- ✅ Vendor chunk separation

## 🌐 Features Available

### ✅ Working Features
- **Bilingual Support**: English/Marathi language toggle
- **Responsive Design**: Mobile-first approach
- **Photo Gallery**: Interactive gallery with lightbox
- **News & Events**: Static content display
- **Faculty Directory**: Teacher profiles
- **Achievement Showcase**: Student achievements
- **Contact Information**: School details and contact form
- **Modern UI**: shadcn/ui components with Tailwind CSS

### 🔄 Static Limitations
- **Contact Form**: Currently simulates submission (can integrate with external services)
- **Dynamic Content**: All content is static (can be updated by rebuilding)
- **User Authentication**: Not available (can be added with external services)

## 💡 Integration Options

### Contact Form Solutions
1. **Formspree**: Simple form handling service
2. **Netlify Forms**: If using Netlify for deployment
3. **EmailJS**: Client-side email sending
4. **AWS SES**: For more advanced email handling

### Dynamic Content Solutions
1. **Headless CMS**: Contentful, Strapi, or Sanity
2. **GitHub as CMS**: Use GitHub API to fetch content
3. **AWS Lambda**: Serverless functions for dynamic content

## 📊 Performance Benefits

- **Fast Loading**: CloudFront CDN distribution
- **Cost Effective**: S3 storage is very cheap
- **Scalable**: Automatically handles traffic spikes
- **Secure**: Private S3 bucket with CloudFront access
- **Global**: CDN ensures fast access worldwide

## 🔒 Security Features

- **Private S3 Bucket**: No direct public access
- **CloudFront Access**: Only CloudFront can access S3
- **HTTPS Only**: Automatic SSL/TLS encryption
- **Origin Access Identity**: Secure S3 access

## 📈 Monitoring & Analytics

- **CloudWatch**: Monitor CloudFront metrics
- **AWS Cost Explorer**: Track spending
- **Google Analytics**: Add to track website usage
- **CloudFront Access Logs**: Detailed request logs

## 🚀 Deployment Commands

```bash
# Build for production
npm run build

# Preview locally
npm run preview

# Deploy to S3 (using AWS CLI)
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 📞 Support

For deployment issues or questions:
- Check AWS documentation
- Review CloudFront and S3 console logs
- Ensure proper IAM permissions
- Verify bucket policies and CloudFront settings

---

**Your JNV Latur website is now ready for S3 + CloudFront deployment!** 🎉
