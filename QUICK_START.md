# 🚀 Quick Start Guide

## 5分钟快速上手

### Step 1: 准备图标文件（1分钟）

**方式一：使用SVG（已完成）**
```bash
# 已经生成了SVG图标，可以直接使用
cd ~/Projects/modern-newtab-extension/icons
ls icon*.svg  # 确认文件存在
```

**方式二：在浏览器中生成PNG（推荐）**
```bash
# 打开图标生成器
open icons/generate-icons.html

# 然后在浏览器中:
# 1. 右键 128x128 canvas → 存储图像为 → icon128.png
# 2. 右键 48x48 canvas → 存储图像为 → icon48.png  
# 3. 右键 16x16 canvas → 存储图像为 → icon16.png
```

### Step 2: 安装扩展（2分钟）

1. **打开Chrome扩展页面**
   ```
   chrome://extensions/
   ```

2. **启用开发者模式**
   - 点击右上角的"开发者模式"开关

3. **加载扩展**
   - 点击"加载已解压的扩展程序"
   - 选择文件夹: `~/Projects/modern-newtab-extension`
   - 点击"选择"

4. **验证安装**
   - 扩展列表中出现"Modern New Tab - AI Enhanced"
   - 图标显示为紫色渐变

### Step 3: 测试功能（2分钟）

#### 3.1 打开新标签页
- 按 `Cmd+T` (Mac) 或 `Ctrl+T` (Windows)
- 或点击Chrome的"+"按钮

#### 3.2 测试搜索
- 按 `/` 键（自动聚焦搜索框）
- 输入"test"
- 按Enter（跳转到Google搜索）

#### 3.3 测试壁纸画廊
- 点击左侧工具栏的 ⚙️ 图标
- 点击"📷 Choose from Gallery"
- 点击任意壁纸
- 背景立即更换 ✨

#### 3.4 测试添加链接
- 点击"+ Add Site"
- 输入网站名: "Spotify"
- 输入URL: "spotify.com"
- 选择图标类型: "Emoji"
- 输入emoji: 🎵
- 点击"Add Site"
- 新链接出现！

#### 3.5 测试快速笔记
- 点击左侧工具栏的 📝 图标
- 输入一些文字
- 关闭面板（点击×）
- 重新打开（点击📝）
- 文字还在！（自动保存）

---

## 常见问题

### Q: 图标显示为灰色问号？
**A:** 可能是图标文件缺失或路径错误。
```bash
# 检查图标文件
ls -la ~/Projects/modern-newtab-extension/icons/

# 应该看到:
# icon16.svg (或 .png)
# icon48.svg (或 .png)
# icon128.svg (或 .png)
```

### Q: 加载扩展时报错？
**A:** 检查manifest.json语法
```bash
# 验证manifest
cd ~/Projects/modern-newtab-extension
python3 -m json.tool manifest.json
# 如果有错误会显示
```

### Q: 壁纸无法加载？
**A:** 检查网络连接，壁纸来自Unsplash需要联网。

### Q: 设置不保存？
**A:** 确认Chrome Storage权限：
```
chrome://extensions/ → 点击扩展详情 → 权限部分
```

---

## 浏览器测试页面（不需要安装）

如果想先测试功能再安装:
```bash
# 打开测试页面
open ~/Projects/modern-newtab-extension/test.html
```

测试页面包含所有功能，使用localStorage模拟Chrome Storage。

---

## 下一步

### 自定义你的New Tab
1. **选择喜欢的壁纸**
   - 从画廊选择
   - 或输入Unsplash URL: `https://source.unsplash.com/1920x1080/?nature`

2. **添加常用网站**
   - Gmail, YouTube, GitHub等
   - 尝试不同图标类型

3. **调整设置**
   - 时钟格式（12/24小时）
   - 背景模式（Cover/Contain/Tile）

### 高级用法
- 使用 `/` 快速搜索
- 尝试ChatGPT搜索引擎
- 用笔记功能记录待办
- 查看实时天气

---

## 卸载（如果需要）

1. 进入 `chrome://extensions/`
2. 找到"Modern New Tab - AI Enhanced"
3. 点击"移除"
4. 确认删除

---

## 故障排除

### 扩展无法加载
```bash
# 检查文件完整性
cd ~/Projects/modern-newtab-extension
find . -type f -name "*.html" -o -name "*.js" -o -name "*.css" -o -name "*.json"

# 应该看到所有必需文件
```

### 控制台错误
1. 打开新标签页
2. 按 `Cmd+Option+I` (Mac) 或 `F12` (Windows)
3. 查看Console选项卡
4. 复制错误信息寻求帮助

### 权限问题
```
chrome://extensions/ → 扩展详情 → 权限 → 确保以下已启用:
- 存储
- 书签（可选）
```

---

## 性能优化建议

### 链接数量
- 推荐: 6-12个链接
- 最多: 20个链接
- 太多会影响加载速度

### 壁纸
- 使用压缩过的图片
- 推荐尺寸: 1920x1080
- 避免超过2MB的图片

### 笔记
- 推荐: <10KB文本
- 大量文本建议使用专门的笔记应用

---

## 获取帮助

**文档**:
- `README.md` - 完整功能说明
- `INSTALL.md` - 详细安装指南
- `UPDATES.md` - 新功能介绍
- `TEST_CHECKLIST.md` - 测试清单

**问题反馈**:
- GitHub Issues
- Email: support@example.com

---

**开始享受你的美丽New Tab吧！** ✨
