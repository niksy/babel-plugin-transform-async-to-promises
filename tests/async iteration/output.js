_async(count=>{const sequence=until=>new _AsyncGenerator(_generator=>{let i=0;return _continueIgnored(_for(()=>i<until,()=>i++,()=>_generator._yield(i).then(_empty)));});let result=0;return _continue(_forAwaitOf(sequence(count),value=>{result+=value;}),()=>result);})