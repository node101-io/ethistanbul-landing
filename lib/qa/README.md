# FAQ Data Structure Guide

This file defines the data structure for the FAQ (Frequently Asked Questions) section on the ETHistanbul landing page.

## 📁 File Structure

```typescript
lib/qa/
├── qa.ts          # Main FAQ data file
└── README.md      # This file
```

## 🔧 Data Structure

### Interface Definitions

```typescript
export interface QAItem {
    question: string; // Question text
    answer: string; // Answer text
}

export interface QASection {
    title: string; // Category title
    items: QAItem[]; // Questions in that category
}
```

### Main Data Array

```typescript
export const qa: QASection[] = [
    {
        title: "Category Name",
        items: [
            {
                question: "Question text?",
                answer: "Answer text...",
            },
        ],
    },
];
```

## ✏️ Editing Rules

### 1. Link Format

**✅ CORRECT Usage (Markdown format):**

```
"Word [link text](https://example.com)"
"Multiple words [click here](https://example.com)"
```

**❌ INCORRECT Usage:**

```
"Word [https://example.com]"           // Old format - don't use
"Word (https://example.com)"           // Regular parentheses
"Word https://example.com"             // No brackets
```

### 2. Line Breaks

**✅ CORRECT Usage:**

```
"First paragraph.\n\nSecond paragraph."
```

**❌ INCORRECT Usage:**

```
"First paragraph.<br />Second paragraph."  // Don't use HTML tags
```

### 3. Special Characters

**✅ CORRECT Usage:**

```
"Don't worry"     // Apostrophe
"ETHIstanbul"     // Capital letters
"Görüşmek üzere!" // Turkish characters
```

## 📝 Editing Examples

### Adding New Question

```typescript
{
    title: "New Category",
    items: [
        {
            question: "New question?",
            answer: "New answer. Use [link text](https://example.com) for links."
        }
    ]
}
```

### Editing Existing Question

```typescript
// BEFORE (old format)
{
    question: "Old question?",
    answer: "Old answer [https://old-link.com]"
}

// AFTER (new Markdown format)
{
    question: "New question?",
    answer: "New answer [link text](https://new-link.com)"
}
```

## 🔗 Link System

### Markdown Link Conversion

The FAQ component automatically:

-   Detects Markdown links in format `[text](url)`
-   Makes the link text clickable
-   Hides the URL (not visible to users)

### Examples

**Single Word Link:**

```
"Get your ticket [here](https://lu.ma/ethistanbul)"
```

**Result:** "here" becomes clickable

**Multiple Words Link:**

```
"Apply for the [ETHIstanbul Hackathon](https://taikai.network/ethistanbul)"
```

**Result:** "ETHIstanbul Hackathon" becomes clickable

**List Item Links:**

```
"- [Speaker Applications](https://forms.gle/...)"
```

**Result:** "Speaker Applications" becomes clickable

## ⚠️ Important Notes

1. **Use Markdown Format**: Use `[link text](url)` format
2. **Don't Use HTML Tags**: Don't use `<br />`, `<a>` etc.
3. **Write in String Format**: Don't use JSX syntax
4. **Export Name**: Export as `qa`
5. **TypeScript Compatible**: Enter data according to interfaces

## 🚀 Usage

The FAQ component automatically imports this file:

```typescript
import { qa } from "@/lib/qa/qa";
```

## 🔍 Testing

After making changes:

1. Refresh the page
2. Go to FAQ section
3. Check if links work
4. Verify line breaks display correctly

## 📞 Help

If you encounter issues:

1. Check TypeScript errors
2. Check error messages in console
3. Ensure link format is correct
4. Make sure you're using Markdown format `[text](url)`
