---
loom_kind: requirement
id: 7d3b1a5c-4e2f-4b68-9a17-c58f02d3e904
title: 新增 isNonEmptyObject 命名导出
status: confirmed
acceptance:
  - 命名导出 isNonEmptyObject 存在，语义为 isObject(val) 为 true 且 Object.keys(val).length > 0 时返回 true，其余返回 false
  - 只有可枚举 Symbol 键的对象返回 false；只有不可枚举自身属性的对象返回 false
  - 默认导出 isObject 行为不变，现有测试全部继续通过
  - index.d.ts 含 isNonEmptyObject 的类型谓词声明；CJS 构建（index.cjs.js）包含新导出
  - test.js 覆盖新函数的典型与边界用例并通过；README 增补 isNonEmptyObject 说明
---

# 新增 isNonEmptyObject 命名导出

## 目标
在 isobject 包中新增命名导出 `isNonEmptyObject`：仅当值通过现有 `isObject` 判断（非 null、非数组、typeof 为 object），且自身至少有一个可枚举字符串键时返回 true；其余情况返回 false。

## 场景
消费方在处理 API 响应或配置对象时，需要区分“真的是有内容的普通对象”和“空对象/数组/null/原始值”，避免对空对象做无效遍历。

## 范围与决定
- 保持默认导出 `isObject` 行为完全不变。
- 键统计只看自身字符串可枚举键（`Object.keys`）；可枚举 Symbol 键不算（用户已确认）。
- 只有不可枚举自身属性的对象返回 false（用户已确认）。
- 同步更新 `index.d.ts`（类型谓词）与 rollup 构建的 CJS 产物（用户已确认）。
- 补充 test.js 用例与 README 说明。
- 不顺带修复 prepublish 脚本缺口及其他与新能力无关的改动（用户已明确不做）。

## 完成条件
见 acceptance；实现完成后 `node test.js` 全部通过，ESM 与 CJS 双格式均可正确导入并使用 isNonEmptyObject。

## 工作事实
- 当前阶段：需求共创收口
- 已完成：目标、语义边界、交付形态均已由用户确认
- 阻碍：无
- 剩余工作：等待用户确认后分派实现
- 事实来源：用户答复；仓库 index.js/test.js/package.json/index.d.ts 阅读
