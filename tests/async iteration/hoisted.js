_async(function(count){const sequence=function(until){return new _AsyncGenerator(function(_generator){let i=0;return _continueIgnored(_for(function(){return i<until;},function(){return i++;},function(){return _generator._yield(i).then(_empty);}));});};let result=0;return _continue(_forAwaitOf(sequence(count),function(value){result+=value;}),function(){return result;});})