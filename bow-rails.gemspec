# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'bow-rails/version'

Gem::Specification.new do |spec|
  spec.name          = "bow-rails"
  spec.version       = Bow::Rails::VERSION
  spec.authors       = ["Brandon Beeks"]
  spec.email         = ["brandon@beeks.me"]

  spec.summary       = %q{IXN UI Framework}
  spec.description   = %q{A UI framework (like Bootstrap) for IXN admin apps}
  spec.homepage      = "https:/ixn.tech"
  spec.license       = "MIT"
  spec.files         = `git ls-files -- {app,bin,lib,test,spec}/* {LICENSE*,Rakefile,README*}`.split("\n")
  spec.require_paths = ["lib"]

  spec.add_dependency "railties"
  spec.add_dependency "jquery-rails"
  spec.add_dependency "sass-rails", "~> 5.0"

  spec.add_development_dependency "bundler", "~> 1.13"
  spec.add_development_dependency "rake", "~> 10.0"
end
