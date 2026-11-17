import random
import mysql.connector

# Connect to MySQL
conn = mysql.connector.connect(host="localhost", user="root", password="", database="tournament")
cursor = conn.cursor()

# Fetch teams sorted by score
cursor.execute("SELECT team_id FROM teams ORDER BY score DESC")
teams = [team[0] for team in cursor.fetchall()]

# Pair teams into groups of 2 or 3
matches = []
i = 0
while i < len(teams):
    if i + 2 < len(teams):  # Three-team matches
        match = (teams[i], teams[i+1], teams[i+2])
        i += 3
    elif i + 1 < len(teams):  # Two-team matches
        match = (teams[i], teams[i+1], None)
        i += 2
    else:
        break
    matches.append(match)

# Assign roles for three-team and two-team formats
for match in matches:
    match_id = None
    cursor.execute("INSERT INTO matches (team_1, team_2, team_3, juror_id) VALUES (%s, %s, %s, %s)",
                   (match[0], match[1], match[2], random.randint(1, 5)))
    match_id = cursor.lastrowid
    
    if match[2]:  # Three-team fight
        roles = [('Reporter', match[0]), ('Opponent', match[1]), ('Reviewer', match[2])]
    else:  # Two-team fight
        roles = [('Reporter', match[0]), ('Opponent', match[1]), ('Reviewer', match[1])]

    for role, team_id in roles:
        cursor.execute("INSERT INTO roles (match_id, team_id, role) VALUES (%s, %s, %s)", (match_id, team_id, role))

conn.commit()
cursor.close()
conn.close()
print("Match scheduling and role assignments completed.")
