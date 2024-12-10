# Job Ad Builder

## Overview

The **Job Ad Builder** application is a three-panel interface designed to help users build job advertisements with drag-and-drop functionality and preview settings.

```
+------------------+------------------+-------------------------+
|     Sections     |     Builder     |   Preview Settings      |
|                  |                 |                         |
| [Sections list]  |   [Drop Zone]   |      [View Modes]       |
|                  |                 |         [Export]        |
+------------------+------------------+-------------------------+
```

## Core Components

### 1. Sections Panel

**Available Sections:**

- Job Header (title, company, location)
- Job Summary
- Responsibilities
- Requirements
- Benefits
- Company Info
- Culture
- How to Apply
- Salary Range
- Location

**Features:**

- Drag-and-drop section blocks
- Add section button option
- Edit section blocks
- Remove section blocks
- Delete section blocks
- Mobile view preview
- Change static text
- Change color schemes
- Export as html
- Rearrange sections
- Rearrage sections from builder panel
- Edit sections from builder panel
- Add company logo and show it in preview

### Technology Stack

- React
- JavaScript
- Tailwind CSS / Styled Components
- Context API for state management

### Additional Features

- Empty drop area for dragging sections
- Mobile/Desktop toggle
- Export functionality with a "Download HTML" button

### Important Notes:

- Updated logo is not included while exporting the .html

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd job-ad-builder
   git checkout dev
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

## Usage Guide

1. **Adding Sections:**
   - Drag and drop sections from the "Sections" panel to the "Builder" panel.
2. **Editing Content:**
   - Click on a edit button on top to edit its content.
3. **Previewing:**
   - Toggle between Desktop and Mobile views in the "Preview" panel.
4. **Exporting:**
   - Click the "Export" button in the "Preview" panel to export your job ad.
