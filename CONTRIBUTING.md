# Contributing to Stories

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Code Organization](#code-organization)
- [Setting Up the project locally](#setting-up-the-project-locally)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Add yourself as a contributor](#add-yourself-as-a-contributor)

## Code of Conduct

We have a code of conduct you can find [here](./CODE_OF_CONDUCT.md) and every
contributor is expected to obey the rules therein. Any issues or PRs that don't
abide by the code of conduct may be closed.

## Code Organization

The Stories is currently divided in to 2 parts and multiple libraries. We use `yarn workspaces` to
share dependencies between them all.

- `demo`: Set of applications on fifferent frameworks and libraries to test and learn integration with Stories.
- `lib`: Common and UI libraries as well as integration to supporting frameworks and libraries.

**Working on your first Pull Request?** You can learn how from this _free_
series
[How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github)

## Setting Up the project locally

To install the project you need to have `yarn` and `node`

1.  [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone
    your fork:

    ```sh
    # Clone your fork
    git clone https://github.com/<your-username>/stories.git

    # Navigate to the newly cloned directory
    cd stories
    ```

2.  Your environment needs to be running Node v.12, v.14 or higher 
3.  from the root of the project: `yarn` to install all dependencies
    - make sure you have latest `yarn` version
4.  from the root of the project: `yarn build`
    - this builds the dependencies in the `lib ` folder.
5.  from the `demo` folder navigate to your very specific framework and run development environment with help of `yarn start`

> Tip: Keep your `main` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```sh
> git remote add upstream https://github.com/storiesjs/stories.git
> git fetch upstream
> git branch --set-upstream-to=upstream/main main
> ```
>
> This will add the original repository as a "remote" called "upstream," then
> fetch the git information from that remote, then set your local `main`
> branch to use the upstream main branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `main` branch.
> Whenever you want to update your version of `main`, do a regular `git pull`.

## Submitting a Pull Request

Please go through existing issues and pull requests to check if somebody else is
already working on it, we use `in progress` label to mark such issues.

Also, make sure to run the tests and lint the code before you commit your
changes.

```sh
yarn test
yarn lint
```

Before running `yarn lint`, you must have build our packages with `yarn build`.

```sh
yarn build
```


Thank you for taking the time to contribute! 👍
