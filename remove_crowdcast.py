import os
import re

def remove_crowdcast_embed_url(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    in_frontmatter = False
    new_lines = []
    for line in lines:
        if line.strip() == '---':
            in_frontmatter = not in_frontmatter
        if in_frontmatter and line.startswith('embed_url:'):
            if line.strip().startswith('embed_url: https://www.crowdcast.io'):
                continue
        new_lines.append(line)

    with open(file_path, 'w') as file:
        file.writelines(new_lines)

def process_events_folder(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                remove_crowdcast_embed_url(file_path)

events_folder = 'content/events'
process_events_folder(events_folder)
