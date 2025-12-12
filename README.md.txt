# 🏡 AK Realty Team - Elegant One-Page Website

This is a clean, elegant, and modern single-page website built purely with HTML, CSS, and JavaScript, designed specifically for a real estate team. It is optimized for easy deployment on GitHub Pages.

## ✨ Features

* **Elegant Design:** Uses a refined palette of Deep Navy (`#1F334A`) and Soft Gold (`#C8A97E`).
* **Single-Page Navigation:** Smooth scrolling links to all main sections (`Home`, `Services`, `Listings`, `Contact`).
* **Fully Responsive:** Optimized for desktop, tablet, and mobile views.
* **Pure Static Files:** No server-side dependencies, perfect for free hosting on GitHub Pages.

## 🚀 Deployment

To deploy this website:

1.  **Create Repository:** Create a new public repository on GitHub (e.g., `ak-realty-website`).
2.  **Upload Files:** Upload all three files (`index.html`, `style.css`, `script.js`) and this `README.md` to the root of the repository.
3.  **Enable GitHub Pages:**
    * Go to **Settings** $\rightarrow$ **Pages**.
    * Under "Build and deployment," set **Source** to **Deploy from a branch** and select the **`main`** branch (or master).
    * The site will be live shortly at `yourusername.github.io/ak-realty-website/`.

## 🛠️ Customization Guide

You can easily customize this website by making edits directly in the three files.

### 1. Customizing Content (`index.html`)

The HTML file contains all the text, headings, and structure.

| Section | Elements to Edit | Line Numbers (Approx.) |
| :--- | :--- | :--- |
| **Hero** | `<h2>` (Headline) and `<p>` (Subheadline) | 30-32 |
| **Services** | `<h3>` (Section Title), `<p class="section-description">`, and the content inside the three `.card` divs. | 45-64 |
| **Listings** | `<h3>`, `<p class="section-description">`, and the `<h4>`, `.price`, and `.details` text within each `.listing-item`. | 74-98 |
| **Contact** | Contact phone number, email, and address inside `.contact-info`. | 114-116 |
| **Footer** | Copyright year and team name. | 123 |

### 2. Changing Colors & Fonts (`style.css`)

The core aesthetic is defined by CSS variables at the top of the file.

| Variable Name | Description | Customization Tip |
| :--- | :--- | :--- |
| `--color-primary` | **Deep Navy** (Used for main headings, footer, and navigation). | Change to your team's primary corporate color. |
| `--color-secondary` | **Soft Gold** (Used for accents, buttons, and call-to-action elements). | Change to your accent color. |
| `--font-family` | Sets the font across the entire site (currently **Poppins**). | To use a different Google Font, update the font name here and the `<link>` in `index.html`. |

### 3. Updating Images (`style.css`)

The Hero section and listing items use background images defined in the CSS for a clean look.

* **Hero Background Image:**
    * Find the `.hero-section` selector (approx. line 118).
    * Replace the URL in `background: url('...')` with a link to your high-quality, professional real estate photo.

* **Listing Item Placeholders:**
    * Find the `.listing-photo` selector (approx. line 178).
    * Replace the placeholder URL in the `background` property with unique images for your featured properties.

### 4. Adjusting Interaction (`script.js`)

The JavaScript file handles two main functions:

1.  **Smooth Scrolling (Lines 3-21):** Handles the animation when clicking on navigation links. **No change is usually needed here.**
2.  **Contact Form Simulation (Lines 23-45):** Since GitHub Pages cannot process form submissions directly, this script **simulates** a successful submission.
    * **IMPORTANT:** To make the form actually send an email, you will need to replace the simulation code with an external service like **FormSubmit** or **Netlify Forms**. Instructions for integrating these services are found on their respective websites.