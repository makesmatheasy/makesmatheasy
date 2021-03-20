![Makes Math Easy](https://user-images.githubusercontent.com/60106112/110195548-f9a2f300-7e63-11eb-81ff-bc776e86456c.png)

Started on **13 July,2020**

Solves various Math Problems along with Steps

### How it differs from other problem-solving projects?

- Speed
- No Server-side Interactions
- Complex Calculations within a few ms(milliseconds)

### Tech Used

![HTML5,CSS3,JavaScript](https://i.imgur.com/nMTD04v.jpg)

Other Tech/Libraries

- [nerdamer](https://nerdamer.com/) for solving various Calculations
- [plotly.js](https://mathjs.org/examples/browser/plot.html.html) by Math.js for plotting Graphs
- [KaTeX](https://katex.org/) for typesetting Math
- [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/) for UI
- jQuery for UI Toggling actions
- [SideNav from MaterializeCSS](https://materializecss.com/sidenav.html) for touch friendly SideNav only
- [Flaticons](https://www.flaticon.com/) for Icons
- [eMathHelp](https://www.emathhelp.net/) for Calculus Steps
- [Numbers API](http://numbersapi.com/) for facts about numbers

### Calculators

- Inbuilt Calculator
  - Regular Calculations
  - Scientific Calculations
  - Fraction/Decimal Answer
- Linear Algebra
  - Matrix (with Steps)
    - Transpose
    - Minors and Co-Factors
    - Determinant with Laplace(Upto 5×5)
    - Addition
    - Subtraction
    - Multiplication
  - Play with Equations (without Steps)
    - Simplify Equation
    - Expand Equation
    - Solve value of variables of multiple inputted equations
- Calculus
  - Integration + Limits
    - Solution from Nerdamer
    - Steps from eMathHelp
    - Graph
  - Differentiation + Higher Order
    - Solution from Nerdamer
    - Steps from eMathHelp
    - Graph
  - Partial Differentiation
    - Solution/Steps from eMathHelp
    - Graph
  - Laplace + Inverse Laplace
    - Solution from Nerdamer
    - Steps from eMathHelp
    - Graph
- Trigonometry
  - Angles from Right Triangle
- General Maths (with Steps)
  - LCM
    - Upto 20 numbers
  - HCF
    - Calculating Factors of each number and picking common out of them
  - Factors
    - Prime Factorization **( with steps for single number)**
  - Log Calculator
    - Calculates the log of x to the base y
  - Plot Graph
    - Plots a Graph of entered Equation having single variable 'x'
  - Roman/Arabic Numerals
    - Conversion from Roman to Arabic and vice versa
    - Expanding the Arabic numbers **(eg. '2423' to '2000+400+20+3')**
    - Expanding the Roman numbers **(eg. 'CIV' to 'C+IV')**
  - Ascending and Descending Order
  - Conversion to words **(eg. '243' to 'two hundred and forty three only')**
  - Multiplication Table
    - Prints Multiplication Table
  - Shapes Calculator + Written formulas
    - Square
    - Rectangle
    - Equilateral Triangle
    - Isosceles Triangle
    - Right-angled Triangle
    - Scalene Triangle
    - Circle
    - Trapezium
    - Ellipse
    - Parallelogram
  - Divide
    - Division
    - Divisibility Checker
  - Multiplication with Steps
  - Roots of Quadratic Equation
  - Rounding off numbers

### Documentation

[Makes Math Easy Documentation](https://github.com/sairish2001/Makes-Math-Easy-Documentation)

### Future Scope

- To add more useful calculators to solve Math problems along with steps
- To show steps of Integration, Differentiation, Laplace, Partial Differentiation rather than showing on eMathHelp website by redirecting to it
- Improving the UI
- Adding Image/Handwriting recognition so that user can click/write a problem and converted to text for further processing

Feel free to come up with new ideas yourself.

## GIT AND GITHUB

---

Before continuing we want to clarify the difference between Git and Github. Git is a version control system(VCS) which is a tool to manage the history of our Source Code. GitHub is a hosting service for Git projects.

We assume you have created an account on Github and installed Git on your System.

Now tell Git your name and E-mail (used on Github) address.

`$ git config --global user.name "YOUR NAME"`
`$ git config --global user.email "YOUR EMAIL ADDRESS"`
This is an important step to mark your commits to your name and email.

### FORK A PROJECT -

---

You can use github explore - https://github.com/explore to find a project that interests you and match your skills. Once you find your cool project to workon, you can make a copy of project to your account. This process is called forking a project to your Github account. On Upper right side of project page on Github, you can see -

<p align="center">  <img  src="https://i.imgur.com/P0n6f97.png">  </p>

Click on fork to create a copy of project to your account. This creates a separate copy for you to workon.

### FINDING A FEATURE OR BUG TO WORKON -

---

Open Source projects always have something to workon and improves with each new release. You can see the issues section to find something you can solve or report a bug. The project managers always welcome new contributors and can guide you to solve the problem. You can find issues in the right section of project page.

<p align="center">  <img  src="https://i.imgur.com/czVjpS7.png">  </p>

### CLONE THE FORKED PROJECT -

---

You have forked the project you want to contribute to your github account. To get this project on your development machine we use clone command of git.

`$ git clone https://github.com/<your-account-username>/<your-forked-project>.git`
Now you have the project on your local machine.

### ADD A REMOTE (UPSTREAM) TO ORIGINAL PROJECT REPOSITORY

---

Remote means the remote location of project on Github. By cloning, we have a remote called origin which points to your forked repository. Now we will add a remote to the original repository from where we had forked.

`$ cd <your-forked-project-folder>`
`$ git remote add upstream https://github.com/<author-account-username>/<project>.git`
You will see the benefits of adding remote later.

### SYNCHRONIZING YOUR FORK -

---

Open Source projects have a number of contributors who can push code anytime. So it is necessary to make your forked copy equal with the original repository. The remote added above called Upstream helps in this.

`$ git checkout master`
`$ git fetch upstream`
`$ git merge upstream/master`
`$ git push origin master`
The last command pushes the latest code to your forked repository on Github. The origin is the remote pointing to your forked repository on github.

### CREATE A NEW BRANCH FOR A FEATURE OR BUGFIX -

---

Normally, all repositories have a master branch which is considered to remain stable and all new features should be made in a separate branch and after completion merged into master branch. So we should create a new branch for our feature or bugfix and start working on the issue.

`$ git checkout -b <feature-branch>`
This will create a new branch out of master branch. Now start working on the problem and commit your changes.

`$ git add --all`
`$ git commit -m "<commit message>"`
The first command adds all the files or you can add specific files by removing -a and adding the file names. The second command gives a message to your changes so you can know in future what changes this commit makes. If you are solving an issue on original repository, you should add the issue number like #35 to your commit message. This will show the reference to commits in the issue.

### REBASE YOUR FEATURE BRANCH WITH UPSTREAM-

---

It can happen that your feature takes time to complete and other contributors are constantly pushing code. After completing the feature your feature branch should be rebase on latest changes to upstream master branch.

`$ git checkout <feature-branch>`
`$ git pull --rebase upstream master`
Now you get the latest commits from other contributors and check that your commits are compatible with the new commits. If there are any conflicts solve them.

### SQUASHING YOUR COMMITS-

---

You have completed the feature, but you have made a number of commits which make less sense. You should squash your commits to make good commits.

`$ git rebase -i HEAD~5`
This will open an editor which will allow you to squash the commits.

### PUSH CODE AND CREATE A PULL REQUEST -

---

Till this point you have a new branch with the feature or bugfix you want in the project you had forked. Now push your new branch to your remote fork on github.

`$ git push origin <feature-branch>`
Now you are ready to help the project by opening a pull request means you now tell the project managers to add the feature or bugfix to original repository. You can open a pull request by clicking on green icon -

<p align="center">  <img  src="https://i.imgur.com/aGaqAD5.png">  </p>

Remember your upstream base branch should be master and source should be your feature branch. Click on create pull request and add a name to your pull request. You can also describe your feature.

Awesome! You have made your first contribution. If you have any doubts please let me know in the comments.

#### BE OPEN!

### This project is a part of following Open Source Program

![GirlScript Summer of Code](https://imgur.com/OIQHXht.png)

### Project Maintainers

- [Rajinderpal Singh](https://github.com/sairish2001) (Admin)
- [Shrey Tripathi](https://github.com/shrey27tri01) (Mentor)
- [Apeksha Manchanda](https://github.com/apekshamanchanda) (Mentor)
- [Nidhi](https://github.com/Nidhirajput1301) (Mentor)

## 🌟 Contributors

Thanks to these wonderful peoples ✨✨:

<table>
	<tr>
		<td>
			<a href="https://github.com/sairish2001/makesmatheasy.github.io/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=sairish2001/makesmatheasy.github.io" />
</a>
		</td>
	</tr>
</table>
