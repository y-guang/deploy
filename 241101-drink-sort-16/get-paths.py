import os
from pathlib import Path


def find_png_files(directory='./img'):
    """
    Recursively find all .png files in the specified directory
    and return their relative paths using Unix-style forward slashes.

    Args:
        directory (str): The root directory to start searching from

    Returns:
        list: A list of relative paths to .png files with forward slashes
    """
    png_files = []

    # Convert directory to absolute path
    abs_path = os.path.abspath(directory)

    # Walk through directory recursively
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.jpg'):
                # Get the full path
                full_path = os.path.join(root, file)
                # Convert to relative path
                rel_path = os.path.relpath(full_path, start='.')
                # Convert to forward slashes
                unix_path = rel_path.replace(os.sep, '/')
                png_files.append(unix_path)

    return sorted(png_files)


# Example usage
if __name__ == '__main__':
    try:
        png_files = find_png_files()
        # add ./ before each path
        png_files = ['./' + path for path in png_files]
        print(png_files)
        print(f'Found {len(png_files)} PNG files')
    except FileNotFoundError:
        print("Error: ./img directory not found")
