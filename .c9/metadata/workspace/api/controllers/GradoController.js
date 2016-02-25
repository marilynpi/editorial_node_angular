{"filter":false,"title":"GradoController.js","tooltip":"/api/controllers/GradoController.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":10,"column":34},"end":{"row":10,"column":35},"action":"insert","lines":["r"],"id":141}],[{"start":{"row":10,"column":35},"end":{"row":10,"column":36},"action":"insert","lines":["a"],"id":142}],[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["d"],"id":143}],[{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["o"],"id":144}],[{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":[" "],"id":145}],[{"start":{"row":10,"column":39},"end":{"row":10,"column":40},"action":"insert","lines":["f"],"id":146}],[{"start":{"row":10,"column":40},"end":{"row":10,"column":41},"action":"insert","lines":["i"],"id":147}],[{"start":{"row":10,"column":41},"end":{"row":10,"column":42},"action":"insert","lines":["l"],"id":148}],[{"start":{"row":10,"column":42},"end":{"row":10,"column":43},"action":"insert","lines":["t"],"id":149}],[{"start":{"row":10,"column":43},"end":{"row":10,"column":44},"action":"insert","lines":["r"],"id":150}],[{"start":{"row":10,"column":44},"end":{"row":10,"column":45},"action":"insert","lines":["a"],"id":151}],[{"start":{"row":10,"column":45},"end":{"row":10,"column":46},"action":"insert","lines":["m"],"id":152}],[{"start":{"row":10,"column":46},"end":{"row":10,"column":47},"action":"insert","lines":["o"],"id":153}],[{"start":{"row":10,"column":47},"end":{"row":10,"column":48},"action":"insert","lines":["s"],"id":154}],[{"start":{"row":10,"column":48},"end":{"row":10,"column":49},"action":"insert","lines":[" "],"id":155}],[{"start":{"row":10,"column":49},"end":{"row":10,"column":50},"action":"insert","lines":["p"],"id":156}],[{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"insert","lines":["o"],"id":157}],[{"start":{"row":10,"column":51},"end":{"row":10,"column":52},"action":"insert","lines":["r"],"id":158}],[{"start":{"row":10,"column":52},"end":{"row":10,"column":53},"action":"insert","lines":[" "],"id":159}],[{"start":{"row":10,"column":53},"end":{"row":10,"column":54},"action":"insert","lines":["i"],"id":160}],[{"start":{"row":10,"column":54},"end":{"row":10,"column":55},"action":"insert","lines":["d"],"id":161}],[{"start":{"row":10,"column":55},"end":{"row":10,"column":56},"action":"insert","lines":["c"],"id":162}],[{"start":{"row":10,"column":56},"end":{"row":10,"column":57},"action":"insert","lines":["i"],"id":163}],[{"start":{"row":10,"column":57},"end":{"row":10,"column":58},"action":"insert","lines":["c"],"id":164}],[{"start":{"row":10,"column":58},"end":{"row":10,"column":59},"action":"insert","lines":["l"],"id":165}],[{"start":{"row":10,"column":59},"end":{"row":10,"column":60},"action":"insert","lines":["o"],"id":166}],[{"start":{"row":14,"column":5},"end":{"row":14,"column":37},"action":"remove","lines":["return response.json(\"findOne\");"],"id":167},{"start":{"row":14,"column":5},"end":{"row":18,"column":7},"action":"insert","lines":["var provincia = request.param(\"id\");","\t    ","\t    Localidad.find({id_provincia:provincia}).sort('nombre').exec(function(err,localidades){","\t        return response.json(localidades);","\t    })"]}],[{"start":{"row":10,"column":55},"end":{"row":10,"column":56},"action":"insert","lines":["_"],"id":168}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":18},"action":"remove","lines":["provincia"],"id":169},{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["i"]}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["d"],"id":170}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["_"],"id":171}],[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["c"],"id":172}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":["i"],"id":173}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":["c"],"id":174}],[{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["l"],"id":175}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":["o"],"id":176}],[{"start":{"row":16,"column":34},"end":{"row":16,"column":43},"action":"remove","lines":["provincia"],"id":177},{"start":{"row":16,"column":34},"end":{"row":16,"column":42},"action":"insert","lines":["id_ciclo"]}],[{"start":{"row":14,"column":9},"end":{"row":14,"column":17},"action":"remove","lines":["id_ciclo"],"id":178},{"start":{"row":14,"column":9},"end":{"row":14,"column":10},"action":"insert","lines":["c"]}],[{"start":{"row":14,"column":10},"end":{"row":14,"column":11},"action":"insert","lines":["i"],"id":179}],[{"start":{"row":14,"column":11},"end":{"row":14,"column":12},"action":"insert","lines":["c"],"id":180}],[{"start":{"row":14,"column":12},"end":{"row":14,"column":13},"action":"insert","lines":["l"],"id":181}],[{"start":{"row":14,"column":13},"end":{"row":14,"column":14},"action":"insert","lines":["o"],"id":182}],[{"start":{"row":16,"column":34},"end":{"row":16,"column":42},"action":"remove","lines":["id_ciclo"],"id":183},{"start":{"row":16,"column":34},"end":{"row":16,"column":39},"action":"insert","lines":["ciclo"]}],[{"start":{"row":16,"column":41},"end":{"row":16,"column":56},"action":"remove","lines":[".sort('nombre')"],"id":184}],[{"start":{"row":16,"column":21},"end":{"row":16,"column":33},"action":"remove","lines":["id_provincia"],"id":185},{"start":{"row":16,"column":21},"end":{"row":16,"column":22},"action":"insert","lines":["i"]}],[{"start":{"row":16,"column":22},"end":{"row":16,"column":23},"action":"insert","lines":["d"],"id":186}],[{"start":{"row":16,"column":23},"end":{"row":16,"column":24},"action":"insert","lines":["_"],"id":187}],[{"start":{"row":16,"column":24},"end":{"row":16,"column":25},"action":"insert","lines":["c"],"id":188}],[{"start":{"row":16,"column":25},"end":{"row":16,"column":26},"action":"insert","lines":["i"],"id":189}],[{"start":{"row":16,"column":26},"end":{"row":16,"column":27},"action":"insert","lines":["c"],"id":190}],[{"start":{"row":16,"column":27},"end":{"row":16,"column":28},"action":"insert","lines":["l"],"id":191}],[{"start":{"row":16,"column":28},"end":{"row":16,"column":29},"action":"insert","lines":["o"],"id":192}],[{"start":{"row":16,"column":5},"end":{"row":16,"column":14},"action":"remove","lines":["Localidad"],"id":193},{"start":{"row":16,"column":5},"end":{"row":16,"column":6},"action":"insert","lines":["G"]}],[{"start":{"row":16,"column":6},"end":{"row":16,"column":7},"action":"insert","lines":["r"],"id":194}],[{"start":{"row":16,"column":7},"end":{"row":16,"column":8},"action":"insert","lines":["a"],"id":195}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["d"],"id":196}],[{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["o"],"id":197}],[{"start":{"row":16,"column":52},"end":{"row":16,"column":63},"action":"remove","lines":["localidades"],"id":198},{"start":{"row":16,"column":52},"end":{"row":16,"column":53},"action":"insert","lines":["g"]}],[{"start":{"row":16,"column":53},"end":{"row":16,"column":54},"action":"insert","lines":["r"],"id":199}],[{"start":{"row":16,"column":54},"end":{"row":16,"column":55},"action":"insert","lines":["a"],"id":200}],[{"start":{"row":16,"column":55},"end":{"row":16,"column":56},"action":"insert","lines":["d"],"id":201}],[{"start":{"row":16,"column":56},"end":{"row":16,"column":57},"action":"insert","lines":["o"],"id":202}],[{"start":{"row":16,"column":57},"end":{"row":16,"column":58},"action":"insert","lines":["s"],"id":203}],[{"start":{"row":17,"column":30},"end":{"row":17,"column":41},"action":"remove","lines":["localidades"],"id":204},{"start":{"row":17,"column":30},"end":{"row":17,"column":36},"action":"insert","lines":["grados"]}],[{"start":{"row":16,"column":60},"end":{"row":17,"column":0},"action":"insert","lines":["",""],"id":205},{"start":{"row":17,"column":0},"end":{"row":17,"column":9},"action":"insert","lines":["\t        "]}],[{"start":{"row":17,"column":9},"end":{"row":17,"column":10},"action":"insert","lines":["i"],"id":206}],[{"start":{"row":17,"column":10},"end":{"row":17,"column":11},"action":"insert","lines":["f"],"id":207}],[{"start":{"row":17,"column":11},"end":{"row":17,"column":13},"action":"insert","lines":["()"],"id":208}],[{"start":{"row":17,"column":12},"end":{"row":17,"column":13},"action":"insert","lines":["e"],"id":209}],[{"start":{"row":17,"column":13},"end":{"row":17,"column":14},"action":"insert","lines":["r"],"id":210}],[{"start":{"row":17,"column":14},"end":{"row":17,"column":15},"action":"insert","lines":["r"],"id":211}],[{"start":{"row":17,"column":16},"end":{"row":17,"column":17},"action":"insert","lines":[" "],"id":212}],[{"start":{"row":17,"column":17},"end":{"row":17,"column":18},"action":"insert","lines":["r"],"id":213}],[{"start":{"row":17,"column":18},"end":{"row":17,"column":19},"action":"insert","lines":["e"],"id":214}],[{"start":{"row":17,"column":19},"end":{"row":17,"column":20},"action":"insert","lines":["t"],"id":215}],[{"start":{"row":17,"column":20},"end":{"row":17,"column":21},"action":"insert","lines":["u"],"id":216}],[{"start":{"row":17,"column":21},"end":{"row":17,"column":22},"action":"insert","lines":["r"],"id":217}],[{"start":{"row":17,"column":22},"end":{"row":17,"column":23},"action":"insert","lines":["n"],"id":218}],[{"start":{"row":17,"column":23},"end":{"row":17,"column":24},"action":"insert","lines":[" "],"id":219}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["e"],"id":220}],[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["r"],"id":221}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["r"],"id":222}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"remove","lines":["r"],"id":223}],[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"remove","lines":["r"],"id":224}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"remove","lines":["e"],"id":225},{"start":{"row":17,"column":24},"end":{"row":17,"column":27},"action":"insert","lines":["err"]}],[{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":[";"],"id":226}],[{"start":{"row":17,"column":24},"end":{"row":17,"column":25},"action":"insert","lines":["r"],"id":227}],[{"start":{"row":17,"column":25},"end":{"row":17,"column":26},"action":"insert","lines":["e"],"id":228}],[{"start":{"row":17,"column":26},"end":{"row":17,"column":27},"action":"insert","lines":["s"],"id":229}],[{"start":{"row":17,"column":27},"end":{"row":17,"column":28},"action":"insert","lines":["p"],"id":230}],[{"start":{"row":17,"column":28},"end":{"row":17,"column":29},"action":"insert","lines":["o"],"id":231}],[{"start":{"row":17,"column":29},"end":{"row":17,"column":30},"action":"insert","lines":["n"],"id":232}],[{"start":{"row":17,"column":30},"end":{"row":17,"column":31},"action":"insert","lines":["s"],"id":233}],[{"start":{"row":17,"column":31},"end":{"row":17,"column":32},"action":"insert","lines":["e"],"id":234}],[{"start":{"row":17,"column":32},"end":{"row":17,"column":33},"action":"insert","lines":["."],"id":235}],[{"start":{"row":17,"column":33},"end":{"row":17,"column":34},"action":"insert","lines":["j"],"id":236}],[{"start":{"row":17,"column":34},"end":{"row":17,"column":35},"action":"insert","lines":["s"],"id":237}],[{"start":{"row":17,"column":35},"end":{"row":17,"column":36},"action":"insert","lines":["o"],"id":238}],[{"start":{"row":17,"column":36},"end":{"row":17,"column":37},"action":"insert","lines":["n"],"id":239}],[{"start":{"row":17,"column":37},"end":{"row":17,"column":38},"action":"insert","lines":["("],"id":240}],[{"start":{"row":17,"column":41},"end":{"row":17,"column":42},"action":"insert","lines":[")"],"id":241}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":20,"column":2},"end":{"row":20,"column":2},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":108,"mode":"ace/mode/javascript"}},"timestamp":1438871700294,"hash":"21bb5922b3aba8a49c90714305362befb6d7c088"}