import os

def remove_crowdcast_parameter(file_path):
    with open(file_path, 'r') as file:
        lines = file.readlines()

    in_frontmatter = False
    new_lines = []
    for line in lines:
        if line.strip() == '---':
            in_frontmatter = not in_frontmatter
        if in_frontmatter and line.startswith('crowdcast:'):
            continue
        new_lines.append(line)

    with open(file_path, 'w') as file:
        file.writelines(new_lines)

def process_sessions_folder(folder_path):
    for root, _, files in os.walk(folder_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                remove_crowdcast_parameter(file_path)

sessions_folder = 'content/sessions'
process_sessions_folder(sessions_folder)
