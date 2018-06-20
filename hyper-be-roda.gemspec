require_relative 'lib/hyper-be-roda/version'

Gem::Specification.new do |s|
  s.name         = 'hyper-be-roda'
  s.version      = HyperBeRoda::VERSION
  s.author       = 'Jan Biedermann'
  s.email        = 'jan@kursator.de'
  s.homepage     = 'https://github.com/janbiedermann/hyper-be-roda'
  s.summary      = 'Backend support for using hyper-stack with roda'
  s.description  = "Write Browser Apps that transparently access server side resources like 'MyModel.first_name', with ease"

  s.executables << 'roda-hyper-it-make'
  s.files          = `git ls-files`.split("\n")
  s.test_files     = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.require_paths  = ['lib']

  s.add_runtime_dependency 'bundler', '~> 1.16.0'
end