# Brightspace Setup Guide for Faculty

This folder includes two kinds of Brightspace HTML files:

- `tinkercad-cheat-sheet-brightspace.html`
  This is the reusable template version. It uses `_img-folder-path_` as a placeholder in all image paths.
- `tinkercad-cheat-sheet-brightspace-1101.html`
  This is an exact section-specific copy for the 1101 course shell.

## What You Need

1. The Brightspace HTML file you want to use
2. The images from `assets/images`
3. A place to upload those images in your Brightspace course files

## Setup Steps

1. Download the images in `assets > images`
   Note: a Dropbox link can be added here later.
2. Log in to your Brightspace course.
3. Go to `Tools > Course Admin`.
4. Click `Manage Files`.
5. Create a new folder, or use an existing folder structure you already have.
6. Click `Upload`.
7. Copy the path shown in the Upload dialog box under `Destination Folder`.
8. Upload all of the images downloaded in step 1 and click `Save`.
9. Open `tinkercad-cheat-sheet-brightspace.html`.
10. Do a find and replace on `_img-folder-path_`.
    Replace it with the full Brightspace folder path from step 7.
    Important: keep the trailing slash at the end of the folder path.
11. Copy the HTML from the file.
12. In Brightspace, open the page, module, or content item where you want to place the cheat sheet.
13. Switch to the HTML source editor and paste the HTML. Often to switch to the editor you have to first click the three dots ... and then click the ```</>``` icon
14. Click Update to save changes.

## Example Replacement

Make sure you copy the trailing / at the end of the path in Brightspace.

Replace:

```text
_img-folder-path_imagename.png
```

With something like:

```text
/content/enforced/COURSE-ID/3d/cheatsheet images/imagename.png
```

## Notes

- Each course has a different ID so the image-folder portion needs to change per section.
- Make sure you're using the Brightspace verson of the .html file and not the web-focused one. The Brightspace version has inline CSS to do the styling.
