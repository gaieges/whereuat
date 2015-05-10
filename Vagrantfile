# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = '2'

Vagrant.require_version '>= 1.5.0'

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # All Vagrant configuration is done here. The most common configuration
  # options are documented and commented below. For a complete reference,
  # please see the online documentation at vagrantup.com.

  config.vm.hostname = 'whereuat'

  # Every Vagrant virtual environment requires a box to build off of.
  # If this value is a shorthand to a box in Vagrant Cloud then
  # config.vm.box_url doesn't need to be specified.
  config.vm.box = 'trusty64-updated'


  # Assign this VM to a host-only network IP, allowing you to access it
  # via the IP. Host-only networks can talk to the host machine as well as
  # any other machines on the same network, but cannot be accessed (through this
  # network interface) by any external networks.
  config.vm.network "public_network", :bridge => 'en0: Wi-Fi (AirPort)'

  config.vm.provider "virtualbox" do |vb|
    vb.customize ["modifyvm", :id, "--memory", "2048", "--cpus","2"]
  end

  config.vm.provision "shell", inline: "apt-get update"

  config.vm.provision "chef_solo" do |chef|
    chef.cookbooks_path = [ "." ]
    chef.log_level      = "info"

    chef.add_recipe       "nginx"
    chef.add_recipe       "docker"
    chef.add_recipe       "docker-mongodb::default"
    chef.add_recipe       "docker-mongodb::install"
    chef.add_recipe       "whereuat"

    # You may also specify custom JSON attributes:
    #chef.json = { mysql_password: "foo" }
  end


  config.berkshelf.enabled = true

  # An array of symbols representing groups of cookbook described in the Vagrantfile
  # to exclusively install and copy to Vagrant's shelf.
  # config.berkshelf.only = []

  # An array of symbols representing groups of cookbook described in the Vagrantfile
  # to skip installing and copying to Vagrant's shelf.
  # config.berkshelf.except = []

end
