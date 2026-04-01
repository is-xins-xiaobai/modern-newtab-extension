# 📸 Creating Chrome Web Store Assets

## 需要的图片素材

### 必需文件清单

| 文件 | 尺寸 | 用途 | 状态 |
|-----|------|------|------|
| icon128.png | 128x128 | 商店图标 | ⏳ 待创建 |
| small_tile.png | 440x280 | 小瓷砖 | ⏳ 待创建 |
| screenshot-1.png | 1280x800 | 截图1 | ⏳ 待创建 |
| screenshot-2.png | 1280x800 | 截图2 | ⏳ 待创建 |
| screenshot-3.png | 1280x800 | 截图3 | ⏳ 待创建 |

### 可选文件

| 文件 | 尺寸 | 用途 |
|-----|------|------|
| marquee_promo.png | 1400x560 | 大宣传图 |
| screenshot-4.png | 1280x800 | 额外截图 |
| screenshot-5.png | 1280x800 | 额外截图 |

---

## 快速创建指南

### Step 1: 创建存储目录

```bash
mkdir -p ~/Projects/modern-newtab-extension/store-assets
cd ~/Projects/modern-newtab-extension/store-assets
```

### Step 2: 转换SVG图标为PNG

#### 方式A: 浏览器（最简单）

```bash
# 打开图标生成器
open ~/Projects/modern-newtab-extension/icons/generate-icons.html
```

然后在浏览器中：
1. 右键 **128x128** canvas
2. 选择"存储图像为..."
3. 保存为：`~/Projects/modern-newtab-extension/store-assets/icon128.png`

#### 方式B: 在线工具

1. 访问：https://cloudconvert.com/svg-to-png
2. 上传 `icons/icon128.svg`
3. 转换并下载
4. 保存到 `store-assets/`

#### 方式C: 使用现有SVG

如果Chrome Web Store接受SVG（某些情况下），可以直接使用：
```bash
cp icons/icon128.svg store-assets/icon128.png
```

### Step 3: 创建宣传瓷砖 (440x280)

这张图片会显示在商店列表中。

#### 设计建议：

**内容**：
- 扩展名称：Modern New Tab
- 标语：AI-Enhanced Productivity
- 关键功能图标：🎨 📷 🔍
- 背景：渐变或截图

#### 使用Figma/Canva创建：

1. 新建 440x280 画布
2. 添加渐变背景（#667eea → #764ba2）
3. 添加文字：
   ```
   Modern New Tab
   Beautiful, Customizable, AI-Powered
   ```
4. 添加小图标展示功能
5. 导出为PNG

#### 或使用截图：

```bash
# 1. 打开新标签页
# 2. 截图整个页面
# 3. 用图片编辑器裁剪为 440x280
# 4. 保存为 small_tile.png
```

### Step 4: 创建截图 (1280x800)

#### 推荐截图内容：

**Screenshot 1: Hero Shot**
- 完整的新标签页视图
- 显示漂亮的背景
- 时钟、日期、搜索框
- 快速链接
- 天气组件

**如何截取**：
```bash
# Mac:
# 1. 打开新标签页，调整窗口为 1280x800
# 2. 按 Cmd+Shift+4，然后按空格键
# 3. 点击Chrome窗口截图
# 4. 保存为 screenshot-1.png

# Windows:
# 1. 使用 Win+Shift+S
# 2. 选择窗口或区域
# 3. 保存为 screenshot-1.png
```

**Screenshot 2: Icon Settings**
- 显示"Add New Site"对话框
- 三种图标模式可见
- 实时预览效果
- 强调创新功能

**Screenshot 3: Wallpaper Gallery**
- 打开壁纸画廊
- 显示15张壁纸缩略图
- 悬停效果
- 突出选择体验

**Screenshot 4（可选）: Settings**
- 打开设置面板
- 显示自定义选项
- 背景设置、时钟格式等

**Screenshot 5（可选）: Search**
- 搜索框聚焦
- 显示多引擎选项
- ChatGPT选项高亮

#### 美化建议：

1. **使用漂亮的背景壁纸**
2. **添加真实的链接**（不要用默认）
3. **确保UI清晰可见**
4. **光标不要出现在截图中**
5. **窗口大小准确**（1280x800或更大）

### Step 5: 添加标注（可选但推荐）

使用图片编辑器在截图上添加说明：

**工具**：
- Mac: Preview, Skitch
- Windows: Paint, Snipping Tool
- Online: Canva, Figma

**添加内容**：
- 箭头指向关键功能
- 简短文字说明
- 突出创新点

**示例标注**：
```
Screenshot 1:
- "Beautiful HD Wallpapers" → 指向背景
- "One-Click Search" → 指向搜索框
- "Custom Icons" → 指向链接

Screenshot 2:
- "3 Icon Modes" → 指向选择器
- "Real-Time Preview" → 指向预览区
```

---

## 检查清单

创建完成后检查：

### 图标 (icon128.png)
- [ ] 尺寸：128x128 像素
- [ ] 格式：PNG
- [ ] 背景：透明或白色
- [ ] 清晰度：高
- [ ] 文件大小：< 100KB

### 小瓷砖 (small_tile.png)
- [ ] 尺寸：440x280 像素
- [ ] 格式：PNG
- [ ] 内容：扩展名称 + 简短说明
- [ ] 设计：吸引眼球
- [ ] 文件大小：< 200KB

### 截图 (screenshot-*.png)
- [ ] 尺寸：1280x800 或更大
- [ ] 格式：PNG 或 JPG
- [ ] 数量：至少3张，最多5张
- [ ] 内容：展示核心功能
- [ ] 清晰度：高
- [ ] 真实性：实际功能截图
- [ ] 每张文件：< 2MB

---

## 快速命令总结

```bash
# 1. 创建目录
mkdir -p ~/Projects/modern-newtab-extension/store-assets

# 2. 打开图标生成器
open ~/Projects/modern-newtab-extension/icons/generate-icons.html
# → 右键保存canvas为 icon128.png

# 3. 安装扩展并截图
# → 按 Cmd+Shift+4 (Mac) 截取窗口
# → 保存为 screenshot-1.png, screenshot-2.png 等

# 4. 创建小瓷砖（使用Figma或截图工具）
# → 尺寸 440x280
# → 保存为 small_tile.png

# 5. 确认所有文件
ls -lh ~/Projects/modern-newtab-extension/store-assets/
# 应该看到：
# icon128.png
# small_tile.png
# screenshot-1.png
# screenshot-2.png
# screenshot-3.png
```

---

## 设计资源

### 免费工具
- **Figma**: https://figma.com (专业设计)
- **Canva**: https://canva.com (简单易用)
- **Photopea**: https://photopea.com (在线PS)

### 图标转换
- **CloudConvert**: https://cloudconvert.com/svg-to-png
- **SVG to PNG**: https://svgtopng.com

### 截图工具
- **Mac**: 内置 (Cmd+Shift+4)
- **Windows**: Snipping Tool
- **跨平台**: Lightshot, ShareX

### 灵感来源
浏览其他扩展的商店页面，学习他们的：
- 截图风格
- 文字说明
- 布局设计

---

## 下一步

创建完所有素材后：

1. 查看 `INSTALLATION_AND_PUBLISH.md`
2. 按照发布流程上传
3. 等待审核通过
4. 庆祝发布成功！🎉

---

**需要帮助？**

如果设计素材遇到困难：
1. 使用简单的截图即可
2. 不需要过度设计
3. 真实展示功能最重要
4. 清晰 > 华丽

**最重要的是：开始行动！** 🚀
