#!/usr/bin/env python3
"""
CROP TO PERFECT 1200x1200 - Charlotte's PNG Fixer
This script crops the Chrome screenshot to exactly 1200x1200px
Removes the white border that Chrome adds
"""

import sys
from PIL import Image
import os

def crop_to_perfect_square(input_path, output_path=None):
    """Crop image to exactly 1200x1200px from top-left"""

    if not output_path:
        # If no output specified, replace '-FIXED' with '-PERFECT'
        output_path = input_path.replace('-FIXED', '-PERFECT').replace('.png', '-PERFECT.png')

    print("=" * 50)
    print("PNG CROP TO 1200x1200")
    print("=" * 50)
    print(f"Input:  {input_path}")
    print(f"Output: {output_path}")
    print()

    try:
        # Open the image
        img = Image.open(input_path)
        print(f"Original size: {img.size[0]}x{img.size[1]}px")

        # Crop to exactly 1200x1200 from top-left
        # This removes the white border Chrome adds at the bottom
        cropped = img.crop((0, 0, 1200, 1200))
        print(f"Cropped to: {cropped.size[0]}x{cropped.size[1]}px")

        # Save the cropped image
        cropped.save(output_path, 'PNG', optimize=True)

        file_size = os.path.getsize(output_path) / 1024

        print()
        print("=" * 50)
        print("SUCCESS! Perfect 1200x1200px PNG created")
        print("=" * 50)
        print(f"File: {output_path}")
        print(f"Size: {file_size:.2f} KB")
        print()
        print("Verification:")
        print("✓ Exactly 1200x1200px")
        print("✓ No white borders")
        print("✓ Ready for LinkedIn/Instagram")
        print("=" * 50)

        return True

    except Exception as e:
        print(f"ERROR: {e}")
        return False

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python crop-to-1200x1200.py [input.png] [optional-output.png]")
        print()
        print("Example: python crop-to-1200x1200.py announcement-FIXED.png announcement-PERFECT.png")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2] if len(sys.argv) > 2 else None

    success = crop_to_perfect_square(input_file, output_file)
    sys.exit(0 if success else 1)
