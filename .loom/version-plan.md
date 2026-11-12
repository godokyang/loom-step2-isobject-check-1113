---
shared_work:
  - id: co-create-planning
    title: isNonEmptyObject 需求共创与确认
    deliverable: docs/requirements/isnonemptyobject-draft.md 正式需求文档与 .loom/version-plan.md
    completion: 三轮问答（目标/行为边界/交付形态）的共识已写入 docs/requirements/isnonemptyobject-draft.md 正式需求文档，用户确认总结
    effort: 1
    kind: planning
    depends_on: []
    status: done
    self_check: '需求文档头部完整（loom_kind: requirement、固定 id、title、status: confirmed、acceptance），总结已被用户确认，规划工作项 co-create-planning 已完成并结算。'
  - id: version-validation
    title: 版本独立验收
    deliverable: 全量自检记录：ESM/CJS 双格式导入验证与类型声明检查
    completion: node test.js 全部通过；ESM 命名导入与构建后 CJS 均可正确导入 isNonEmptyObject；d.ts 类型检查无误
    effort: 1
    kind: validation
    depends_on:
      - co-create-planning
requirements:
  - requirement_id: 7d3b1a5c-4e2f-4b68-9a17-c58f02d3e904
    scope: 在 isobject 包新增命名导出 isNonEmptyObject：isObject(val) 且 Object.keys(val).length > 0 才返回 true；Symbol 可枚举键与不可枚举属性不算；保持默认导出行为不变；同步 index.d.ts 类型谓词与 CJS 构建；补充 test.js 用例与 README 说明；不顺带修复其他发布缺口。
    effort: 2
    expected_seconds: 1800
---
# 版本计划

主 Agent 维护的公共工作与需求预算。
