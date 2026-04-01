# 🎨 图标源说明

## 默认图标源

### Clearbit Logo API (默认)

**现在使用**：
```
https://logo.clearbit.com/gmail.com
https://logo.clearbit.com/github.com
https://logo.clearbit.com/twitter.com
```

**优点**：
- ✅ 超高清质量（官方品牌logo）
- ✅ 自动适配尺寸
- ✅ 免费使用
- ✅ 支持大部分知名网站
- ✅ 快速CDN

**覆盖范围**：
- 大品牌：✅ 优秀
- 知名网站：✅ 很好
- 小网站：⚠️ 可能没有

---

## 其他可用图标源

### 1. Google Favicon API
```
https://www.google.com/s2/favicons?domain=example.com&sz=256
```
**特点**：
- 覆盖面最广（几乎所有网站）
- 质量一般（取决于网站favicon）
- 有些网站图标模糊

### 2. DuckDuckGo Icons
```
https://icons.duckduckgo.com/ip3/example.com.ico
```
**特点**：
- 覆盖面广
- 质量中等
- 稳定可靠

### 3. Favicon.io
```
https://favicon.io/
```
**特点**：
- 可以生成文字图标
- 自定义颜色
- 需要手动生成

---

## 三种图标模式对比

### 模式1: Auto（自动）
**默认行为**：
- 新添加的链接：使用 **Clearbit Logo API**
- 降级策略：如果Clearbit没有，自动切换到Google Favicon

**优点**：
- 自动选择最佳源
- 大品牌超清晰
- 小网站有降级

**使用场景**：
- ✅ 添加知名网站（推荐）
- ✅ 懒得选择
- ⚠️ 小众网站可能不清晰

### 模式2: Emoji
**示例**：
```
📧 Gmail
🎵 Spotify
💻 GitHub
📺 Netflix
```

**优点**：
- 100%清晰（矢量）
- 色彩丰富
- 跨平台统一
- 永不模糊

**使用场景**：
- ✅ 追求统一风格
- ✅ 图标不清晰时
- ✅ 个性化

### 模式3: Custom URL
**示例**：
```
https://logo.clearbit.com/spotify.com
https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/netflix.svg
```

**优点**：
- 完全自定义
- 可用SVG（矢量）
- 可用PNG/JPG
- 质量可控

**使用场景**：
- ✅ 默认图标不满意
- ✅ 需要特定风格
- ✅ 有自己的logo

---

## 推荐的自定义图标源

### 1. Clearbit Logo API ⭐ 推荐
```
https://logo.clearbit.com/domain.com
```
**例子**：
- Spotify: `https://logo.clearbit.com/spotify.com`
- Apple: `https://logo.clearbit.com/apple.com`
- Microsoft: `https://logo.clearbit.com/microsoft.com`

### 2. Simple Icons CDN
```
https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/[name].svg
```
**例子**：
- GitHub: `https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg`
- Twitter: `https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/twitter.svg`

**查找名称**：https://simpleicons.org

### 3. DevIcon
```
https://cdn.jsdelivr.net/gh/devicons/devicon/icons/[name]/[name]-original.svg
```
**适合开发工具**：
- React, Vue, Docker, AWS等
- 查找：https://devicon.dev

### 4. Iconify
```
https://api.iconify.design/[collection]/[icon].svg
```
**超大图标库**：
- 150,000+ 图标
- 查找：https://icon-sets.iconify.design

---

## 使用指南

### 场景1: 添加知名网站
**推荐：直接用Auto模式**
```
1. 点击 "+ Add Site"
2. 名称：Spotify
3. URL：spotify.com
4. 图标类型：Auto ✓
5. 完成 - 自动获取高清logo
```

### 场景2: 图标不清晰
**方案A：换成Emoji**
```
1. 悬停链接 → 点击 ✎
2. 图标类型：Emoji
3. 输入：🎵
4. 保存
```

**方案B：用Clearbit**
```
1. 悬停链接 → 点击 ✎
2. 图标类型：Custom URL
3. 输入：https://logo.clearbit.com/spotify.com
4. 保存
```

### 场景3: 小众网站
**推荐：Emoji或自己找logo**
```
1. 先尝试Auto
2. 如果模糊 → 换Emoji
3. 或者从网站右键复制logo URL
```

---

## 测试不同图标源

### Gmail
```
Google Favicon: https://www.google.com/s2/favicons?domain=gmail.com&sz=256
Clearbit:      https://logo.clearbit.com/gmail.com
Emoji:         📧
```

### GitHub
```
Google Favicon: https://www.google.com/s2/favicons?domain=github.com&sz=256
Clearbit:      https://logo.clearbit.com/github.com
Simple Icons:  https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg
Emoji:         💻
```

### Twitter
```
Google Favicon: https://www.google.com/s2/favicons?domain=twitter.com&sz=256
Clearbit:      https://logo.clearbit.com/twitter.com
Simple Icons:  https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/twitter.svg
Emoji:         🐦
```

---

## 质量排名

### 知名品牌（Google, Apple, Microsoft等）
1. 🥇 Clearbit Logo API
2. 🥈 Simple Icons CDN
3. 🥉 Google Favicon API

### 开发工具（GitHub, VS Code, Docker等）
1. 🥇 Simple Icons / DevIcon
2. 🥈 Clearbit
3. 🥉 Google Favicon

### 小众网站
1. 🥇 Emoji（最可靠）
2. 🥈 Google Favicon
3. 🥉 自己找logo

---

## 默认配置变更

### 之前（v1.0 - v1.1）
```javascript
icon: 'https://www.google.com/s2/favicons?domain=gmail.com&sz=256'
```
- Gmail: ⚠️ 模糊
- GitHub: ⚠️ 模糊
- Twitter: ⚠️ 模糊

### 现在（v1.2+）
```javascript
icon: 'https://logo.clearbit.com/gmail.com'
```
- Gmail: ✅ 超清晰
- GitHub: ✅ 超清晰
- Twitter: ✅ 超清晰

---

## 降级策略

当用户添加新链接（Auto模式）：
```javascript
1. 尝试：Clearbit Logo API
   ↓ (加载失败)
2. 降级：Google Favicon API (256px)
   ↓ (加载失败)
3. 降级：Google Favicon API (64px)
   ↓ (全部失败)
4. 显示：占位符或建议用Emoji
```

---

## FAQ

### Q: 为什么不全用Clearbit?
**A**: Clearbit只支持知名网站，小网站需要降级到Google Favicon。

### Q: 哪个图标源最清晰?
**A**: 
1. Clearbit（知名网站）
2. SVG图标（矢量，永远清晰）
3. Emoji（矢量）

### Q: 可以混用吗?
**A**: 可以！每个链接可以用不同的图标源。

### Q: 我的网站用哪个?
**A**: 
- 知名网站 → Auto（自动Clearbit）
- 小网站 → Emoji
- 开发工具 → Simple Icons
- 个人网站 → 自己的logo URL

---

## 更新日志

### v1.2 (2026-04-02)
- ✅ 默认链接改用Clearbit Logo API
- ✅ Gmail, GitHub, Twitter 超清晰
- ✅ 保留降级到Google Favicon

### v1.1
- 图标尺寸：48px → 64px
- 源分辨率：128px → 256px
- 添加：image-rendering 优化

### v1.0
- 初始版本
- Google Favicon API
- 128px 源分辨率

---

**现在重新加载扩展，看到超清晰的默认图标！** ✨

如果某个网站图标还是不清晰，编辑它并：
1. 换成Emoji，或
2. 用 `https://logo.clearbit.com/domain.com`
