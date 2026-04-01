# 🚀 Chrome Web Store 提交指南

## 准备材料检查清单

- [x] ZIP包：`~/Projects/modern-newtab-v1.2.0.zip`
- [ ] GitHub Pages已启用
- [ ] 隐私政策URL可访问
- [ ] 3-5张截图已准备
- [ ] 开发者账号已注册

---

## 提交步骤

### 1. 上传ZIP包

1. 访问：https://chrome.google.com/webstore/devconsole
2. 点击 **"新增商品"** 或 **"New Item"**
3. 点击 **"选择文件"**
4. 选择：`~/Projects/modern-newtab-v1.2.0.zip`
5. 点击 **"上传"**
6. 等待处理（约30秒-1分钟）

---

### 2. 商店信息（Store Listing）

#### 商品名称
```
Modern New Tab - AI Enhanced
```

#### 摘要（132字符以内）
```
Beautiful new tab with custom icons, 15 HD wallpapers & AI search. Simple, clean, privacy-first!
```

#### 详细说明

复制粘贴以下内容：

```
Transform your browser with Modern New Tab!

✨ KEY FEATURES

🎨 ADVANCED ICON CUSTOMIZATION
• Auto Mode: High-res favicons (256x256)
• Emoji Mode: Any emoji as icons
• Custom Mode: Your own images
• Edit anytime with one click

🖼️ BEAUTIFUL WALLPAPER GALLERY
• 15 curated HD wallpapers
• One-click switching
• Add unlimited custom wallpapers
• Name and manage your collection

🔗 SMART QUICK LINKS
• Add unlimited sites
• Three icon modes
• Edit name, URL, or icon anytime
• Clean, organized layout

🔍 MULTI-ENGINE SEARCH
• Google, Bing, DuckDuckGo
• ChatGPT AI search
• Keyboard shortcut (/)
• Remember your preference

⏰ ELEGANT CLOCK
• Real-time display
• 12/24 hour format
• Beautiful date formatting

🔐 PRIVACY FIRST
• NO tracking or analytics
• NO data collection
• Everything stays local
• Manifest V3 compliant
• Open source on GitHub

Perfect for:
✓ Productivity enthusiasts
✓ Students organizing bookmarks
✓ Developers needing quick access
✓ Anyone who loves beautiful design

HOW TO USE:
1. Click 🖼️ to choose a wallpaper
2. Click + Add Site to add links
3. Choose icon: Auto, Emoji, or Custom
4. Hover and click ✎ to edit anytime
5. Press / to search instantly

WHY MODERN NEW TAB?
• Industry-first 3-icon mode system
• Built-in gallery (no manual URLs)
• Edit links without re-adding
• Custom wallpaper management
• Real-time preview
• Floating buttons (clean UI)
• Active development
• Privacy guaranteed

OPEN SOURCE:
Check out the code on GitHub!
Contribute, report issues, or fork.

Your privacy matters. We collect ZERO data.

⭐ Love it? Please rate and review!
```

#### 分类
```
Productivity
```

#### 语言
```
English
```

---

### 3. 图形资源（Graphics）

#### 商店图标（128x128，必需）
上传：`~/Projects/modern-newtab-extension/icons/icon128.png`

#### 小瓷砖图（440x280，必需）
**快速方法**：
1. 打开任意截图
2. 使用Preview裁剪为440x280
3. 上传

**或者**：直接用icon128.png，Chrome会自动调整

#### 截图（至少1张，最多5张，1280x800）
上传你刚才制作的截图：
- screenshot-1.png
- screenshot-2.png
- screenshot-3.png
- 等等...

---

### 4. 隐私实践（Privacy Practices）

#### 隐私政策URL
```
https://is-xins-xiaobai.github.io/modern-newtab-extension/privacy-policy.html
```
（确保GitHub Pages已启用，URL可访问）

#### 单一用途说明
```
Replace new tab page with a customizable dashboard featuring quick links, wallpaper gallery, and search.
```

#### 权限说明

**storage权限**：
```
Save user preferences, quick links, and settings locally. Everything stays on your device.
```

---

### 5. 分发（Distribution）

#### 可见性
- 选择：**公开（Public）**

#### 国家/地区
- 选择：**所有国家（All regions）**

#### 定价
- 选择：**免费（Free）**

---

### 6. 提交审核

1. 检查所有信息
2. 点击 **"预览商店列表页面"**（可选）
3. 确认无误
4. 点击 **"提交审核"**
5. 收到确认邮件

---

## 审核时间

- **通常**：1-3个工作日
- **复杂扩展**：最多1周
- **节假日**：可能更长

---

## 审核结果

### ✅ 批准
- 收到批准邮件
- 扩展立即上线
- 获得商店链接：`chrome.google.com/webstore/detail/[扩展ID]`

### ⚠️ 需要修改
- 收到详细反馈邮件
- 按要求修改
- 重新提交

### ❌ 拒绝
- 收到拒绝原因
- 修复问题
- 重新提交

---

## 常见问题

### Q: 必须要$5注册费吗？
**A**: 是的，这是一次性费用，防止垃圾扩展。

### Q: 隐私政策必须吗？
**A**: 是的，Chrome Web Store强制要求。

### Q: 截图尺寸要求？
**A**: 至少1280x800，推荐1920x1080。

### Q: 可以先不公开吗？
**A**: 可以选择"不公开"，只有拥有链接的人能安装。

### Q: 如何更新扩展？
**A**: 
1. 修改代码
2. 更新version号（manifest.json）
3. 创建新ZIP
4. 在开发者控制台上传
5. 提交审核

---

## 快速命令参考

```bash
# 1. 打开GitHub Pages设置
open "https://github.com/is-xins-xiaobai/modern-newtab-extension/settings/pages"

# 2. 验证隐私政策
open "https://is-xins-xiaobai.github.io/modern-newtab-extension/privacy-policy.html"

# 3. 打开开发者控制台
open "https://chrome.google.com/webstore/devconsole"

# 4. 查看ZIP包
ls -lh ~/Projects/modern-newtab-v1.2.0.zip

# 5. 查看图标
open ~/Projects/modern-newtab-extension/icons/icon128.png
```

---

## 提交前最后检查

- [ ] GitHub Pages已启用
- [ ] 隐私政策URL可访问
- [ ] 3张截图已准备（保存在桌面）
- [ ] 图标文件可访问
- [ ] 开发者账号已注册并支付$5
- [ ] ZIP包已准备
- [ ] 商店描述已复制

**全部完成？开始提交！** 🚀

---

## 预计时间

| 步骤 | 时间 |
|------|------|
| 启用GitHub Pages | 2分钟 |
| 制作截图 | 10分钟 |
| 注册开发者 | 5分钟 |
| 提交扩展 | 15分钟 |
| **总计** | **30分钟** |
| 等待审核 | 1-3天 |

---

**准备好了吗？开始行动！** 🎉
