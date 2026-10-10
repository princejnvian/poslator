export const utilityTools = [
  { slug: "image-resizer", title: "Image Resizer", category: "Image Tools", description: "Resize an image to exact pixel dimensions in your browser.", icon: "image", accent: "blue", kind: "resize" },
  { slug: "image-compressor", title: "Image Compressor", category: "Image Tools", description: "Reduce image file size with adjustable quality before downloading.", icon: "compress", accent: "violet", kind: "compress" },
  { slug: "jpg-to-png", title: "JPG to PNG Converter", category: "Image Tools", description: "Convert a JPG or JPEG image into a PNG file.", icon: "file-image", accent: "blue", kind: "convert-png" },
  { slug: "png-to-jpg", title: "PNG to JPG Converter", category: "Image Tools", description: "Convert a PNG image to a compact JPG file.", icon: "file-image", accent: "cyan", kind: "convert-jpg" },
  { slug: "image-cropper", title: "Image Cropper", category: "Image Tools", description: "Crop an image to a centered square and download it.", icon: "crop", accent: "orange", kind: "crop" },
  { slug: "youtube-tags-generator", title: "YouTube Tags Generator", category: "YouTube Tools", description: "Create relevant tag ideas from your video topic and copy them in seconds.", icon: "youtube", accent: "youtube", kind: "youtube-tags" },
  { slug: "youtube-hashtag-generator", title: "YouTube Hashtag Generator", category: "YouTube Tools", description: "Generate topic-based hashtag suggestions for your video description.", icon: "youtube", accent: "youtube", kind: "youtube-hashtags" },
  { slug: "youtube-title-generator", title: "YouTube Title Generator", category: "YouTube Tools", description: "Draft title ideas using your topic, audience and preferred style.", icon: "youtube", accent: "youtube", kind: "youtube-titles" },
  { slug: "youtube-description-generator", title: "YouTube Description Generator", category: "YouTube Tools", description: "Build a clear video description template with topic keywords and chapters.", icon: "youtube", accent: "youtube", kind: "youtube-description" },
  { slug: "instagram-engagement-calculator", title: "Instagram Engagement Calculator", category: "Instagram Tools", description: "Estimate engagement rate from followers, likes and comments you enter.", icon: "instagram", accent: "instagram", kind: "instagram-engagement" },
  { slug: "instagram-bio-analyzer", title: "Instagram Bio Analyzer", category: "Instagram Tools", description: "Check the clarity and completeness of a bio you paste in.", icon: "instagram", accent: "instagram", kind: "instagram-bio" },
  { slug: "word-counter", title: "Word Counter", category: "Text Tools", description: "Count words, characters, sentences and estimated reading time.", icon: "text", accent: "blue", kind: "word-counter" },
  { slug: "case-converter", title: "Case Converter", category: "Text Tools", description: "Convert text to uppercase, lowercase, title case or sentence case.", icon: "type", accent: "violet", kind: "case-converter" },
  { slug: "text-to-slug", title: "Text to Slug Converter", category: "Text Tools", description: "Turn a title into a clean, URL-friendly slug.", icon: "link", accent: "green", kind: "slug" },
  { slug: "duplicate-line-remover", title: "Duplicate Line Remover", category: "Text Tools", description: "Remove repeated lines from a list while keeping the original order.", icon: "list-check", accent: "orange", kind: "dedupe" },
];
export function getUtilityTool(slug) { return utilityTools.find((tool) => tool.slug === slug); }
