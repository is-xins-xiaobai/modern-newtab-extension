# 📦 Installation & Publishing Guide

## Part 1: 本地安装（开发测试）

### Step 1: 确认文件完整性

```bash
cd ~/Projects/modern-newtab-extension

# 检查必需文件
ls -la manifest.json newtab.html background.js
ls -la scripts/newtab.js
ls -la styles/newtab.css
ls -la icons/icon*.svg
```

应该看到所有文件都存在。

### Step 2: 在Chrome中加载扩展

#### 方法A: 使用命令行（快速）

```bash
# 打开Chrome扩展页面
open -a "Google Chrome" "chrome://extensions/"
```

#### 方法B: 手动打开

1. 打开Chrome浏览器
2. 在地址栏输入：`chrome://extensions/`
3. 按Enter

### Step 3: 启用开发者模式

在扩展页面右上角，找到并**开启**"开发者模式"开关。

### Step 4: 加载扩展

1. 点击左上角的 **"加载已解压的扩展程序"** 按钮
2. 在文件选择器中，导航到：
   ```
   /Users/xzhao/Projects/modern-newtab-extension
   ```
3. 点击 **"选择"** 按钮

### Step 5: 验证安装

✅ 扩展列表中出现 "Modern New Tab - AI Enhanced"  
✅ 图标显示为紫色渐变  
✅ 状态显示"已启用"  

### Step 6: 测试功能

1. **打开新标签页**：按 `Cmd+T` 或点击Chrome的"+"按钮
2. **应该看到**：
   - 美丽的渐变背景
   - 中间的时钟和日期
   - 搜索框
   - 6个默认快速链接
   - 右上角天气组件
   - 左侧工具栏

---

## Part 2: 发布到Chrome Web Store

### 准备工作清单

#### A. 开发者账号注册

1. **访问Chrome Web Store开发者控制台**：
   ```
   https://chrome.google.com/webstore/devconsole
   ```

2. **注册开发者账号**：
   - 使用Google账号登录
   - 支付一次性注册费：**$5 USD**
   - 填写开发者信息

#### B. 准备必需资产

在发布前，需要准备以下文件：

##### 1. 图标文件（PNG格式，推荐）

```bash
cd ~/Projects/modern-newtab-extension/icons

# 如果你有PNG图标就跳过这一步
# 否则需要将SVG转换为PNG

# 方式1: 在浏览器中生成
open generate-icons.html
# 右键每个canvas → 存储图像为 → icon128.png, icon48.png, icon16.png

# 方式2: 使用在线工具
# 访问 https://cloudconvert.com/svg-to-png
# 上传 icon128.svg，转换为PNG
# 重复处理 icon48.svg 和 icon16.svg
```

##### 2. 宣传图片

需要准备以下尺寸的图片：

**必需**：
- **128x128 图标** (icon128.png) - 已有 ✅
- **440x280 小瓷砖图** (small_tile.png) - 需要创建
- **920x680 大宣传图** (large_promo.png) - 需要创建
- **1280x800 截图** (至少1张，最多5张) - 需要创建

让我帮你创建这些：

```bash
# 创建宣传素材目录
mkdir -p ~/Projects/modern-newtab-extension/store-assets
cd ~/Projects/modern-newtab-extension/store-assets
```

##### 3. 截图（Screenshots）

需要3-5张展示功能的截图：

**推荐截图内容**：
1. **Hero Shot** - 完整的新标签页（展示背景、时钟、链接）
2. **Icon Settings** - 显示添加链接的对话框
3. **Wallpaper Gallery** - 显示壁纸画廊
4. **Customization** - 显示设置面板
5. **Search** - 显示搜索功能

**如何截图**：
```bash
# 1. 安装扩展后，打开新标签页
# 2. 按 Cmd+Shift+4（Mac）或 Win+Shift+S（Windows）
# 3. 截取整个窗口或特定区域
# 4. 保存为 1280x800 或更大

# 保存位置
~/Projects/modern-newtab-extension/store-assets/screenshot-1.png
~/Projects/modern-newtab-extension/store-assets/screenshot-2.png
# ...
```

##### 4. 描述文本

**简短描述**（132个字符以内）：
```
A beautiful, AI-enhanced new tab with custom icons, wallpaper gallery, notes, and ChatGPT search.
```

**详细描述**（建议）：
```markdown
Transform your browsing experience with Modern New Tab!

✨ KEY FEATURES:

🎨 Advanced Icon System
• Auto: High-res favicons (128x128)
• Emoji: Any emoji as icons
• Custom: Your own images
• Real-time preview

🖼️ Beautiful Wallpaper Gallery
• 15 curated HD wallpapers
• One-click switching
• Nature, City, Abstract, Minimal
• Custom URL support

🔍 Smart Search
• Multiple engines (Google, Bing, DuckDuckGo)
• ChatGPT AI search
• Keyboard shortcut (/)

📝 Quick Tools
• Auto-save notes
• Live weather
• Customizable settings

🔐 Privacy First
• No tracking
• No analytics
• All data stays local
• Manifest V3 compliant

Perfect for productivity, students, developers, and anyone who loves a beautiful browser!
```

##### 5. 隐私政策

**重要**：Chrome要求提供隐私政策URL。

创建一个简单的隐私政策页面：

```bash
# 创建隐私政策文件
cat > ~/Projects/modern-newtab-extension/PRIVACY_POLICY.md << 'EOF'
# Privacy Policy - Modern New Tab Extension

Last updated: 2026-04-01

## Data Collection

**We collect ZERO personal data.**

This extension:
- ❌ Does NOT collect any personal information
- ❌ Does NOT track your browsing history
- ❌ Does NOT send data to external servers
- ❌ Does NOT use analytics or telemetry
- ❌ Does NOT sell or share any data

## Data Storage

All your data is stored **locally** in your browser using Chrome's Storage API:
- Quick links you add
- Background preferences
- Notes you type
- Settings you configure

This data:
- ✅ Stays on your device
- ✅ Syncs via Chrome Sync (if enabled by you)
- ✅ Can be deleted anytime (Reset button in settings)

## Permissions

We request these permissions:
- **storage**: Save your settings and notes locally
- **bookmarks**: (Optional) Access bookmarks for future features
- **topSites**: (Optional) Show frequently visited sites

We do NOT:
- Access your passwords
- Read your emails
- Track your location (weather uses IP-based geolocation API)
- Monitor your activity

## Third-Party Services

The extension uses these services:
- **Google Favicon API**: Fetch website icons
- **Unsplash**: Wallpaper images
- **Open-Meteo**: Weather data (free, no account needed)

These services may have their own privacy policies.

## Changes

We may update this policy. Changes will be posted here.

## Contact

Questions? Email: support@example.com

---

**Your privacy is our priority.** ❤️
EOF

echo "Privacy policy created!"
```

**发布隐私政策**：

你需要将隐私政策放到一个公开URL，选项：
1. **GitHub Pages**（免费）
2. **个人网站**
3. **Google Sites**（免费）

示例（使用GitHub）：
```bash
# 如果你有GitHub仓库
# 1. 创建 gh-pages 分支
# 2. 上传 PRIVACY_POLICY.md
# 3. URL会是：https://username.github.io/repo/PRIVACY_POLICY.html
```

---

### 发布流程

#### Step 1: 打包扩展

```bash
cd ~/Projects/modern-newtab-extension

# 创建发布版本（删除不需要的文件）
mkdir -p ../modern-newtab-release
cp -r . ../modern-newtab-release/

cd ../modern-newtab-release

# 删除开发文件
rm -f test.html
rm -f icons/create_icons.py
rm -f icons/generate-icons.html
rm -rf .git
rm -rf store-assets
rm -rf *.md  # 保留README.md除外

# 确认manifest.json使用PNG图标（如果转换了）
# 编辑 manifest.json，确保：
# "icons": {
#   "16": "icons/icon16.png",
#   "48": "icons/icon48.png", 
#   "128": "icons/icon128.png"
# }
```

#### Step 2: 创建ZIP文件

```bash
cd ~/Projects
zip -r modern-newtab-extension-v1.1.0.zip modern-newtab-release/
```

验证ZIP：
```bash
unzip -l modern-newtab-extension-v1.1.0.zip
```

#### Step 3: 上传到Chrome Web Store

1. **访问开发者控制台**：
   ```
   https://chrome.google.com/webstore/devconsole
   ```

2. **点击"新建商品"**

3. **上传ZIP文件**：
   - 选择刚创建的 `modern-newtab-extension-v1.1.0.zip`
   - 点击"上传"

4. **填写商店信息**：

   **基本信息**：
   - 商品名称：`Modern New Tab - AI Enhanced`
   - 简短描述：（见上文）
   - 详细描述：（见上文）
   - 类别：`Productivity`
   - 语言：`English`

   **图标和图片**：
   - 128x128 图标：上传 `icon128.png`
   - 440x280 小瓷砖：上传 `small_tile.png`
   - 1280x800 截图：上传 3-5 张截图

   **隐私**：
   - 隐私政策：输入你的隐私政策URL
   - 权限说明：
     ```
     • Storage: Save your settings and notes
     • Bookmarks: Access bookmarks (future feature)
     ```

   **分发**：
   - 可见性：`公开` 或 `不公开`
   - 区域：`所有区域` 或 选择特定国家

5. **提交审核**：
   - 检查所有信息
   - 点击"提交审核"

#### Step 4: 等待审核

- **审核时间**：通常 1-3 个工作日
- **状态检查**：在开发者控制台查看
- **可能结果**：
  - ✅ 批准发布
  - ⚠️ 需要修改（会收到邮件说明）
  - ❌ 拒绝（很少，除非违反政策）

#### Step 5: 发布成功

审核通过后：
- ✅ 扩展出现在Chrome Web Store
- ✅ 用户可以搜索和安装
- ✅ 你会收到确认邮件

**扩展URL格式**：
```
https://chrome.google.com/webstore/detail/[扩展ID]
```

---

## Part 3: 更新扩展

当你需要更新时：

### Step 1: 修改版本号

```bash
cd ~/Projects/modern-newtab-extension

# 编辑 manifest.json
# 将 "version": "1.1.0" 改为 "1.1.1" 或 "1.2.0"
```

### Step 2: 创建新ZIP

```bash
cd ~/Projects
zip -r modern-newtab-extension-v1.2.0.zip modern-newtab-release/
```

### Step 3: 上传更新

1. 访问开发者控制台
2. 点击你的扩展
3. 点击"上传更新的包"
4. 选择新ZIP文件
5. 更新说明（可选）
6. 提交审核

---

## 快速检查清单

### 发布前检查 ✅

- [ ] manifest.json版本号正确
- [ ] 所有功能正常工作
- [ ] 图标文件格式正确（PNG推荐）
- [ ] 无控制台错误
- [ ] 隐私政策页面可访问
- [ ] 截图清晰美观
- [ ] 描述文字无拼写错误
- [ ] 开发者账号已注册（$5）
- [ ] ZIP文件不超过Chrome限制（100MB）

### 审核可能关注点

- ✅ 权限使用合理
- ✅ 无恶意代码
- ✅ 描述准确
- ✅ 截图真实
- ✅ 隐私政策完整
- ✅ 无版权侵犯

---

## 常见问题

### Q: 审核被拒绝怎么办？

**A**: 查看拒绝原因邮件，修改后重新提交。常见原因：
- 权限说明不清
- 隐私政策缺失
- 描述误导
- 截图不符

### Q: 可以先不公开发布吗？

**A**: 可以！选择"不公开"发布，只有拥有链接的人可以安装。

### Q: 发布要钱吗？

**A**: 
- 注册开发者：$5（一次性）
- 发布扩展：免费
- 更新扩展：免费

### Q: 多久能审核通过？

**A**: 通常1-3个工作日，复杂扩展可能更久。

### Q: 能改名字吗？

**A**: 发布后可以改，但建议发布前确定好。

---

## 推广建议

发布后的推广：

1. **社交媒体**：分享到Twitter、Reddit
2. **Product Hunt**：发布产品
3. **YouTube**：录制演示视频
4. **博客文章**：写使用教程
5. **用户反馈**：鼓励评价和评分

---

## 支持与维护

**监控**：
- 定期查看评论和评分
- 修复用户报告的bug
- 添加用户请求的功能

**更新频率**：
- Bug修复：尽快
- 小功能：1-2月
- 大版本：3-6月

---

**准备好发布了吗？** 🚀

按照这个指南一步步来，你的扩展很快就能在Chrome Web Store上线！
EOF

echo "Installation and publishing guide created!"
