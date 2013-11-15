# # coding: utf-8

require 'json'

# file.json には [1, 2, 3, {"foo" : "bar"}] と書かれているとき
open("file.json") do |io|
	JSON.load(io) #=> [1, 2, 3, {"foo"=>"bar"}]
end