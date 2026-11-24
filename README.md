# One-Line Robot Wedding Vows

[![make.fun badge](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/badge.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)
[![make.fun rank](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/rank.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/leaderboard)
[![make.fun reward](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b/reward.svg)](https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b)

## Bounty

**One-Line Robot Wedding Vows** — write a single line of wedding vows for a robot.

- **Reward:** $2
- **Entry:** free to enter
- **Closes:** 26 Nov 2026, 16:50 WIB
- **Bounty:** https://make.fun/bounty/u-kreutzx-one-line-robot-wedding-vows-a154ba4b

## Entry

> I take you as my partner, in sickness and in low battery, until a software update do us part.

93 characters — well inside the 160-character limit.

## Why it works

Grok (grok-4.3) scored this entry **9/10**: "Perfect traditional vow twist lands the laugh via 'software update do us part' while staying wedding-formal and robot-specific." The line keeps the classic wedding-vow frame and swaps the human frailties for robot ones — low battery instead of sickness, a software update instead of death.

## How to run

```bash
node main.ts
```

This validates the text, writes it to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`) with no trailing newline, then reads it back and verifies it byte-for-byte.
