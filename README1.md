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

### 2. Builder Panel

**Core Features:**

- Drop zone for sections
- Section reordering capability
- Content editing interface
- Section removal option
- Basic content formatting tools

### 3. Preview & Settings Panel

**Preview Modes:**

- Desktop view
- Mobile view

**Settings Options:**

- Color scheme selection
- Company logo upload

**Export Options:**

- HTML export

## Technical Requirements

### Technology Stack

- React
- JavaScript
- Tailwind CSS / Styled Components
- Context API for state management

### Core Functionality

1. **Section Management:**
   - Adding sections
   - Removing sections
   - Reordering sections
2. **Content Handling:**
   - Content editing
   - Preview updates
   - Settings management
3. **Export Features:**
   - Download as .html file

## Deliverables

### Required

1. **Source Code:**
   - GitHub repository
   - Clean, organized code structure
   - Component architecture
2. **Documentation:**
   - README file
   - Setup instructions
   - Basic usage guide

## Implementation Notes

### Development Focus

- Core functionality implementation
- Preview mode accuracy
- Export feature reliability
- Settings functionality
- Responsive design

### Best Practices

- Clean code structure
- Error handling
- Responsive layouts
- Intuitive user interface
- Performance optimization

## Design Details

### Sections API

Fetch sections from: [https://ticket-portal-api.vercel.app/sections](https://ticket-portal-api.vercel.app/sections)

#### Each section includes:

- Unique ID
- Name
- Description
- Type
- HTML content with Tailwind CSS styling

### Additional Features

- Empty drop area for dragging sections
- Mobile/Desktop toggle
- Export functionality with a "Download HTML" button

### Important Notes:

- Prioritize core functionality over additional features
- Ensure smooth preview mode transitions
- Implement basic error handling
- Focus on responsive design
- Maintain clean, readable code

## How to Run

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd job-ad-builder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Usage Guide

1. **Adding Sections:**
   - Drag and drop sections from the "Sections" panel to the "Builder" panel.
2. **Editing Content:**
   - Click on a section in the "Builder" panel to edit its content.
3. **Previewing:**
   - Toggle between Desktop and Mobile views in the "Preview" panel.
4. **Exporting:**
   - Click the "Download HTML" button in the "Preview" panel to export your job ad.

---

Thank you for using the Job Ad Builder application!
