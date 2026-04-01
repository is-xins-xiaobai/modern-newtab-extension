# 🎉 Updates - Enhanced Icon & Wallpaper Features

## Version 1.1.0 - 2026-04-01

### ✨ New Features

#### 1. 🎨 **Advanced Icon Settings**

添加网站链接时，现在有三种图标选择方式：

**方式一：自动获取 Favicon（推荐）**
- 自动从网站获取高清图标
- 无需手动设置
- 支持128x128高清分辨率

**方式二：使用 Emoji**
- 任何emoji都可以作为图标
- 例如：🎵 🎮 📚 ✈️ 🍕
- 简单直观，颜色丰富

**方式三：自定义图片URL**
- 使用任何在线图片
- 完全个性化
- 支持PNG、JPG、SVG

**如何使用：**
1. 点击 "+ Add Site"
2. 输入网站名称和URL
3. 选择图标类型（Auto/Emoji/Custom URL）
4. 实时预览图标效果
5. 点击"Add Site"完成

---

#### 2. 🖼️ **Background Gallery - 15+ Beautiful Wallpapers**

内置精选壁纸库，一键更换背景：

**包含壁纸类型：**
- 🏔️ **Mountain Peak** - 壮丽山景
- 🌊 **Ocean Sunset** - 海洋日落
- 🌲 **Forest Path** - 森林小径
- 🌌 **Aurora Borealis** - 北极光
- 🏜️ **Desert Dunes** - 沙漠沙丘
- 🏙️ **City Night** - 城市夜景
- 💜 **Lavender Field** - 薰衣草田
- ⭐ **Starry Night** - 星空
- 🌸 **Cherry Blossom** - 樱花
- 🏖️ **Tropical Beach** - 热带海滩
- ❄️ **Snow Mountain** - 雪山
- 🍂 **Autumn Forest** - 秋季森林
- 🎨 **Abstract Colors** - 抽象彩色
- 🌫️ **Minimal Gray** - 极简灰色
- 💜 **Gradient Purple** - 渐变紫色

**如何使用：**
1. 点击左侧⚙️（设置）
2. 点击"📷 Choose from Gallery"
3. 浏览预览图
4. 点击任意壁纸立即应用

**或者使用自定义背景：**
- 输入任何图片URL
- 点击"Save Custom URL"
- 支持Unsplash、Pexels等图片源

---

### 🔧 Technical Improvements

**图标系统升级：**
- Google Favicon API集成（128x128高清）
- 实时图标预览
- 错误处理（图片加载失败时自动降级）
- 支持emoji作为图标

**壁纸系统：**
- 15张精选高清壁纸（1920x1080）
- 缩略图懒加载（性能优化）
- 一键切换
- 仍支持自定义URL

**UI/UX改进：**
- 模态对话框动画
- 响应式画廊布局
- 悬停预览效果
- 键盘快捷键支持

---

### 📸 Screenshots

#### Advanced Icon Selector
```
┌────────────────────────────┐
│  Add New Site              │
│                            │
│  Site Name: [YouTube____]  │
│  URL: [youtube.com_____]   │
│  Icon Type: [Auto ▼]       │
│                            │
│  Preview: [▶️ icon]        │
│                            │
│  [Add Site] [Cancel]       │
└────────────────────────────┘
```

#### Wallpaper Gallery
```
┌──────────────────────────────────────┐
│  Background Gallery            [×]   │
├──────────────────────────────────────┤
│  [🏔️]  [🌊]  [🌲]  [🌌]  [🏜️]     │
│  [🏙️]  [💜]  [⭐]  [🌸]  [🏖️]     │
│  [❄️]  [🍂]  [🎨]  [🌫️]  [💜]     │
└──────────────────────────────────────┘
```

---

### 🎯 Use Cases

**场景1：添加带自定义图标的链接**
- 想要给Notion添加专属logo
- 选择"Custom URL"模式
- 输入Notion的官方logo URL
- 预览确认后添加

**场景2：快速添加多个网站**
- 使用"Auto"模式
- 只需输入名称和URL
- 系统自动获取favicon
- 快速批量添加

**场景3：用Emoji美化界面**
- 选择"Emoji"模式
- 为不同类别选择对应emoji
- 工作类：💼 📊 📧
- 娱乐类：🎮 🎵 📺
- 学习类：📚 ✏️ 🎓

**场景4：每天换壁纸**
- 打开设置 → 画廊
- 根据心情选择壁纸
- 一秒钟完成切换
- 15种风格随心选

---

### 🚀 Performance

**优化点：**
- 图标懒加载
- 壁纸缩略图（300px预览图）
- 全尺寸壁纸（1920px）仅在选择时加载
- 模态动画使用CSS（GPU加速）

**加载时间：**
- 画廊打开：<100ms
- 图标预览：<50ms
- 壁纸切换：<200ms

---

### 📋 Migration Guide

**从v1.0升级到v1.1：**

你的现有设置会自动保留：
- ✅ 现有链接保持不变
- ✅ 当前背景保持不变
- ✅ 所有设置保持不变

**更新现有链接图标（可选）：**
1. 点击链接右上角的 "×"
2. 重新添加并选择新图标类型
3. 或者保持原样（仍然可用）

---

### 🐛 Bug Fixes

- 修复：Favicon获取失败时的降级处理
- 修复：模态框在移动设备上的显示
- 修复：背景图片加载失败时的提示
- 改进：键盘导航和无障碍访问

---

### 📝 Known Issues

- 部分网站的favicon可能加载较慢
- Unsplash图片需要网络连接
- Safari浏览器可能需要手动刷新图标

---

### 🔮 Coming Next (v1.2)

计划中的功能：
- [ ] 拖拽重排链接
- [ ] 导出/导入壁纸收藏
- [ ] 自定义壁纸分类
- [ ] 图标缓存（离线支持）
- [ ] 批量导入书签
- [ ] 深色模式
- [ ] 壁纸幻灯片（每天自动切换）

---

### 💡 Pro Tips

**技巧1：快速搜索emoji**
- macOS: `Control + Command + Space`
- Windows: `Win + .`

**技巧2：找高质量图标**
- Flaticon.com
- Icons8.com
- 直接从品牌官网复制logo URL

**技巧3：自定义壁纸源**
- Unsplash: `https://source.unsplash.com/1920x1080/?nature`
- Pexels: 右键图片 → 复制图片地址
- 本地图片: 使用图床服务上传

**技巧4：主题搭配**
- 浅色壁纸 → 深色图标
- 深色壁纸 → 浅色/彩色图标
- 单色壁纸 → emoji图标

---

### 🎨 Wallpaper Sources

所有壁纸来自Unsplash（免费、高质量）：
- 📸 无需署名
- ✅ 商业使用免费
- 🌍 全球顶级摄影师作品
- 🔄 定期更新

想要更多壁纸？
1. 访问 [unsplash.com](https://unsplash.com)
2. 搜索喜欢的风格
3. 复制图片地址
4. 粘贴到"Custom URL"

---

### 📞 Feedback

有建议或发现问题？
- 在GitHub提issue
- 或发邮件至：support@example.com

期待你的反馈！ 🙌

---

**Enjoy your beautiful new tab with amazing icons and wallpapers!** ✨
