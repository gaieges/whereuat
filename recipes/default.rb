#
# Cookbook Name:: whereuat
# Recipe:: default
#
# Copyright 2015, Evin Callahan
#
# All rights reserved - Do Not Redistribute
#

docker_image 'whereuat' do
  source '/vagrant/server-app'
  action :build
end

docker_container 'whereuat' do
  link '/mongod:mongod'
  detach true
  port '8000:8000'
  action :run
end
