WhereUAt
--------

# Goal
To provide a quick and easy way to find and communicate with friends in a very crowded or diverse landscape



# Getting started
## As a Dev

Start by getting all of the tools:
* Vagrant
* VirtualBox
* chef

Spin up a new instance by running the following in the repo:

```shell
vagrant up
```

You should then have a working ubuntu instance that should be running mongo and a nodejs app within docker containers


# Components

Ultimately, the pieces of the architecture will look something like:

* iOS / Android / web client talks to
* NodeJS api that will store data in a
* mongodb database
