1. One-Time Git Setup (Windows)
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global core.autocrlf true

Verify:
git config --global --list

2. Clone Repository
git clone https://github.com/ORG/REPO.git
cd REPO

Check branch:
git branch

3. Create User / Feature Branch (From main)
git checkout main
git pull origin main
git checkout -b feature/user-branch
git push -u origin feature/user-branch


4. Work on User Branch (Push Code)
git status
git add .
git commit -m "Add new feature or fix"
git push origin feature/user-branch


5. Pull Latest Changes
git checkout main
git pull origin main

Pull user branch
git checkout feature/user-branch
git pull origin feature/user-branch

6. Update User Branch With Latest main
git checkout main
git pull origin main
git checkout feature/user-branch
git merge main

7. Merge User Branch Into main
git checkout main
git pull origin main
git merge feature/user-branch
git push origin main

8. Resolve Merge Conflicts (Windows)
git status

Manually edit conflicted files, then:
git add .
git commit -m "Resolve merge conflicts"

Abort merge if needed:
git merge --abort


9. Delete User Branch After Merge

Delete local branch
git branch -d feature/user-branch

Delete remote branch
git push origin --delete feature/user-branch

10. Undo / Recovery Commands
Undo last commit (keep changes):
git reset --soft HEAD~1

Undo last commit (discard changes):
git reset --hard HEAD~1

Discard local file changes:
git checkout -- filename.ext

Abort rebase:
git rebase --abort

11. Useful Windows Git Commands

View history:
git log --oneline --graph --all

View differences:
git diff
git diff main..feature/user-branch

12. Standard Windows Git Workflow Summary
main
 ├─ pull latest
 ├─ create feature branch
 ├─ commit & push
 ├─ merge main into feature
 ├─ merge feature into main
 ├─ push main
 └─ delete feature branch


 Fresh commit/push:
 git status (To check if git is already initialized): error fatal
 git init (run if above error is received)
 git remote -v (Check if a remote already exists:)
 git remote add origin https://github.com/MukherjeeMainak019/PlaywrightBasics_TypeScript.git
 git remote -v (verify again)
 git status (check which files are new/modified or unchecked)
 git add . (stage all files)
 git status (confirm staging)
 git commit -m "Playwright Basics with Type Script full code" 
 git push -u origin main
 
 Already existing:
 git status (to check what is changed)
 git add . (stage it again)
 git status (confirm the changes)
 git commit -m "Comments" (commit with comments)
 git push (Since upstream is already set, just run:)

git pull --rebase


