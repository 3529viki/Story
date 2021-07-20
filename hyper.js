
Vikash singh@DESKTOP-DEH6M1N MINGW64 ~
$ cd /D/VIKASH

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH
$ mkdir Story

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH
$ cd Story

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story
$ ls

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story
$ touch chapter1.txt

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story
$ git init
Initialized empty Git repository in D:/VIKASH/Story/.git/

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ ls -a
./  ../  .git/  chapter1.txt

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        chapter1.txt

nothing added to commit but untracked files present (use "git add" to track)

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git add chapter1.txt

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   chapter1.txt


Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git commit -m "Complete chapetr 1"
Author identity unknown

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

fatal: unable to auto-detect email address (got 'Vikash singh@DESKTOP-DEH6M1N.(none)')

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$   git config --global user.email "you@example.com"

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$  git config --global user.name "Vikash"

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git config --global user.name
Vikash

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git commit -m "Complete chapter 1"
[master (root-commit) d09dace] Complete chapter 1
 1 file changed, 1 insertion(+)
 create mode 100644 chapter1.txt

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ omit global "vikiparmar1209@gmail.com"
bash: omit: command not found

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ omit --global "vikiparmar1209@gmail.com"
bash: omit: command not found

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ omit --global user.emailid  "vikiparmar1209@gmail.com"
bash: omit: command not found

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git log
commit d09dace1e3cf34336c05486c599863511263cccf (HEAD -> master)
Author: Vikash <you@example.com>
Date:   Tue Jul 20 01:16:18 2021 +0530

    Complete chapter 1

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ touch chapter2.txt chapter3.txt

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git status
On branch master
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        chapter2.txt
        chapter3.txt

nothing added to commit but untracked files present (use "git add" to track)



Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git add .

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git status
On branch master
Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        new file:   chapter2.txt
        new file:   chapter3.txt
        new file:   hyper.js


Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git commit -m "Complete chapter 2 and 3"
[master 175b5b8] Complete chapter 2 and 3
 3 files changed, 118 insertions(+)
 create mode 100644 chapter2.txt
 create mode 100644 chapter3.txt
 create mode 100644 hyper.js

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)
$ git log
commit 175b5b8df00f725a5e9f8252586adf3c2f6185d8 (HEAD -> master)
Author: Vikash <you@example.com>
Date:   Tue Jul 20 02:03:39 2021 +0530

    Complete chapter 2 and 3

commit d09dace1e3cf34336c05486c599863511263cccf
Author: Vikash <you@example.com>
Date:   Tue Jul 20 01:16:18 2021 +0530

    Complete chapter 1

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/Story (master)




Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ git diff chapter3.txt

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ git diff chapter2.txt
diff --git a/chapter2.txt b/chapter2.txt
index 1633e0d..293bae7 100644
--- a/chapter2.txt
+++ b/chapter2.txt
@@ -1 +1 @@
-It was the age of wisdom, it was the age of foolishness.
\ No newline at end of file
+gufge  euugfg efguv uegcuk ugugc ugeuc2g.
\ No newline at end of file

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ git checkout chapter2.txt
Updated 1 path from the index

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ git log
commit 5a55bae2d6b620535f8a61f7ec9f0141f1b5ec0a (HEAD -> master)
Author: Your Name <you@example.com>
Date:   Tue Jul 20 23:02:57 2021 +0530

    Complete chapter 2 and 3

commit 8354eac23e86777da9746f6732d2758688e676c8
Author: Your Name <you@example.com>
Date:   Tue Jul 20 22:57:48 2021 +0530

    Complete chapter 1





Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ git push -u origin master
The authenticity of host 'github.com (13.234.176.102)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
This key is not known by any other names
Are you sure you want to continue connecting (yes/no/[fingerprint])?
Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ Host key verification failed.
it remote add origin ^C

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$  git remote add origin https://github.com/3529viki/Story.git
error: remote origin already exists.

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ ^C

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ git remote remove origin

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$  git remote add origin https://github.com/3529viki/Story.git

Vikash singh@DESKTOP-DEH6M1N MINGW64 /D/VIKASH/story (master)
$ git push -u origin master
Select an authentication method for 'https://github.com/':
  1. Web browser (default)
  2. Personal access token
option (enter for default):
info: please complete authentication in your browser...
Enumerating objects: 8, done.
Counting objects: 100% (8/8), done.
Delta compression using up to 6 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (8/8), 1.56 KiB | 797.00 KiB/s, done.
Total 8 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/3529viki/Story.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
