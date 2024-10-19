import os
import yaml

def remove_crowdcast_parameter(file_path):
    with open(file_path, 'r') as file:
        content = file.read()

    frontmatter, body = content.split('---', 2)[1:]
    frontmatter_data = yaml.safe_load(frontmatter)

    if 'recordings' in frontmatter_data and 'crowdcast' in frontmatter_data['recordings']:
        del frontmatter_data['recordings']['crowdcast']

    new_frontmatter = yaml.dump(frontmatter_data, default_flow_style=False)
    new_content = f"---\n{new_frontmatter}---\n{body}"

    with open(file_path, 'w') as file:
        file.write(new_content)

def process_sessions_folder(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                remove_crowdcast_parameter(file_path)

sessions_folder = 'content/sessions'
process_sessions_folder(sessions_folder)
