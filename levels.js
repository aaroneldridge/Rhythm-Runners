var levelOne = {
	music: "./sounds/bgm_1.mp3",
	platform_tiles: [{x: 756, y: 500},
					 {x: 812, y: 500},
					 {x: 868, y: 500},
					 {x: 956, y: 300},
					 {x: 1012, y: 300},
					 {x: 1068, y: 300},
					 {x: 1556, y: 500},
					 {x: 1612, y: 500},
					 {x: 1668, y: 500},
					 {x: 1756, y: 300},
					 {x: 1812, y: 300},
					 {x: 1868, y: 300},
					 {x: 1956, y: 100},
					 {x: 2012, y: 100},
					 {x: 2068, y: 100},
					 {x: 2256, y: 300},
					 {x: 2312, y: 300},
					 {x: 2368, y: 300},
					 {x: 2556, y: 500},
					 {x: 2612, y: 500},
					 {x: 2668, y: 500},
					 {x: 2956, y: 500},
					 {x: 3012, y: 500},
					 {x: 3068, y: 500},
					 {x: 3156, y: 300},
					 {x: 3212, y: 300},
					 {x: 3268, y: 300},
					 {x: 3456, y: 500},
					 {x: 3512, y: 500},
					 {x: 3568, y: 500},
					 {x: 3856, y: 600},
					 {x: 3912, y: 600},
					 {x: 3968, y: 600},
					 {x: 4256, y: 500},
					 {x: 4312, y: 500},
					 {x: 4368, y: 500},
					 {x: 4456, y: 300},
					 {x: 4512, y: 300},
					 {x: 4568, y: 300},
					 {x: 5756, y: 500},
					 {x: 5812, y: 500},
					 {x: 5868, y: 500},
					 {x: 5956, y: 300},
					 {x: 6012, y: 300},
					 {x: 6068, y: 300},
					 {x: 6156, y: 100},
					 {x: 6212, y: 100},
					 {x: 6268, y: 100},
					 {x: 6456, y: 300},
					 {x: 6512, y: 300},
					 {x: 6568, y: 300},
					 {x: 6656, y: 100},
					 {x: 6712, y: 100},
					 {x: 6768, y: 100},
					 {x: 6956, y: 300},
					 {x: 7012, y: 300},
					 {x: 7068, y: 300},
					 {x: 7256, y: 500},
					 {x: 7312, y: 500},
					 {x: 7368, y: 500},
					 {x: 7656, y: 500},
					 {x: 7712, y: 500},
					 {x: 7768, y: 500},
					 {x: 8056, y: 500},
					 {x: 8112, y: 500},
					 {x: 8168, y: 500},
					 {x: 8356, y: 300},
					 {x: 8412, y: 300},
					 {x: 8468, y: 300},
					 {x: 8656, y: 100},
					 {x: 8712, y: 100},
					 {x: 8768, y: 100},
					 {x: 8956, y: 500},
					 {x: 9012, y: 500},
					 {x: 9068, y: 500},
					 {x: 9256, y: 300},
					 {x: 9312, y: 300},
					 {x: 9368, y: 300},
					 {x: 9556, y: 500},
					 {x: 9612, y: 500},
					 {x: 9668, y: 500},
					 {x: 9856, y: 300},
					 {x: 9912, y: 300},
					 {x: 9968, y: 300},
					 {x: 10156, y: 100},
					 {x: 10212, y: 100},
					 {x: 10268, y: 100},
					 {x: 10456, y: 300},
					 {x: 10512, y: 300},
					 {x: 10568, y: 300},
					 {x: 10656, y: 500},
					 {x: 10712, y: 500},
					 {x: 10768, y: 500},
					 {x: 11056, y: 600},
					 {x: 11112, y: 600},
					 {x: 11168, y: 600},
					 {x: 11224, y: 600},
					 {x: 11280, y: 600},
					 {x: 11336, y: 600},
					 {x: 11780, y: 200},
					 {x: 11836, y: 300},
					 {x: 11556, y: 700},
					 {x: 11612, y: 650},
					 {x: 11668, y: 600},
					 {x: 11724, y: 550},
					 {x: 11780, y: 500},
					 {x: 11836, y: 500},
					 {x: 11892, y: 500},
					 {x: 11948, y: 500},
					 {x: 12004, y: 500},
					 {x: 12060, y: 500},
					 {x: 12116, y: 500},
					 {x: 12172, y: 500},
					 {x: 12228, y: 500},
					 {x: 12284, y: 500},
					 {x: 12340, y: 500},
					 {x: 11892, y: 400},
					 {x: 11948, y: 400},
					 {x: 12004, y: 400},
					 {x: 12060, y: 400},
					 {x: 12116, y: 400},
					 {x: 12172, y: 400},
					 {x: 12228, y: 400},
					 {x: 12556, y: 450},
					 {x: 12612, y: 450},
					 {x: 12668, y: 450},
					 {x: 12724, y: 450},
					 {x: 12780, y: 450},
					 {x: 12836, y: 450},
					 {x: 12892, y: 450},
					 {x: 12948, y: 450},
					 {x: 13004, y: 450},
					 {x: 13060, y: 450},
					 {x: 13116, y: 450},
					 {x: 13172, y: 450},
					 {x: 12668, y: 350},
					 {x: 12724, y: 350},
					 {x: 12780, y: 350},
					 {x: 12836, y: 350},
					 {x: 12892, y: 350},
					 {x: 12948, y: 350},
					 {x: 13004, y: 350},
					 {x: 13060, y: 350},
					 {x: 12612, y: 200},
					 {x: 12556, y: 150},
					 {x: 12556, y: 150},
					 {x: 12500, y: 100},
					 {x: 13456, y: 350},
					 {x: 13512, y: 350},
					 {x: 13568, y: 350},
					 {x: 13756, y: 500},
					 {x: 13812, y: 500},
					 {x: 13868, y: 500},
					 {x: 14056, y: 300},
					 {x: 14112, y: 300},
					 {x: 14168, y: 300},
					 {x: 14356, y: 100},
					 {x: 14412, y: 100},
					 {x: 14468, y: 100},
					 {x: 14524, y: 150},
					 {x: 14580, y: 200},
					 {x: 14636, y: 250},
					 {x: 14692, y: 300},
					 {x: 14748, y: 350},
					 {x: 14804, y: 400},
					 {x: 14860, y: 450},
					 {x: 14916, y: 500},
					 {x: 14972, y: 550},
					 {x: 15028, y: 600},
					 {x: 15084, y: 650},
					 {x: 15140, y: 700},
					 {x: 15626, y: 450},
					 {x: 15682, y: 450},
					 {x: 15738, y: 450},
					 {x: 15794, y: 450},
					 {x: 15850, y: 450},
					 {x: 15906, y: 450},
					 {x: 15962, y: 450},
					 {x: 16018, y: 450},
					 {x: 16074, y: 450},
					 {x: 16130, y: 450},
					 {x: 16186, y: 450},
					 {x: 16242, y: 450},
					 {x: 16298, y: 450},
					 {x: 16354, y: 450},
					 {x: 16410, y: 450},
					 {x: 16466, y: 450},
					 {x: 16522, y: 450},
					 {x: 17600, y: 690},
					 {x: 17656, y: 634},
					 {x: 17712, y: 578},
					 {x: 17768, y: 578},
					 {x: 17880, y: 360},
					 {x: 17936, y: 304},
					 {x: 17992, y: 248},
					 {x: 18048, y: 192},
					 {x: 18272, y: 500},
					 {x: 18328, y: 444},
					 {x: 18384, y: 388},
					 {x: 18440, y: 388},
					 {x: 18664, y: 260},
					 {x: 18720, y: 204},
					 {x: 18776, y: 148},
					 {x: 18832, y: 148},
					 {x: 19036, y: 400},
					 {x: 19092, y: 400},
					 {x: 19148, y: 400},
					 {x: 19428, y: 400},
					 {x: 19484, y: 400},
					 {x: 19540, y: 400},
					 {x: 20344, y: 690},
					 {x: 20400, y: 634},
					 {x: 20456, y: 578},
					 {x: 20512, y: 578},
					 {x: 20624, y: 360},
					 {x: 20680, y: 304},
					 {x: 20736, y: 248},
					 {x: 20792, y: 248},
					 {x: 21016, y: 500},
					 {x: 21072, y: 444},
					 {x: 21128, y: 388},
					 {x: 21184, y: 388},
					 {x: 21408, y: 260},
					 {x: 21464, y: 204},
					 {x: 21520, y: 148},
					 {x: 21576, y: 148},
					 {x: 21724, y: 400},
					 {x: 21780, y: 400},
					 {x: 21836, y: 400},
					 {x: 22038, y: 200},
					 {x: 22094, y: 200},
					 {x: 22150, y: 200},
					 {x: 22206, y: 256},
					 {x: 22262, y: 312},
					 {x: 22318, y: 368},
					 {x: 22654, y: 450},
					 {x: 22710, y: 450},
					 {x: 22766, y: 450},
					 {x: 23200, y: 690},
					 {x: 23256, y: 634},
					 {x: 23312, y: 578},
					 {x: 23368, y: 578},
					 {x: 23480, y: 360},
					 {x: 23536, y: 304},
					 {x: 23592, y: 248},
					 {x: 23648, y: 248},
					 {x: 23872, y: 500},
					 {x: 23928, y: 444},
					 {x: 23984, y: 388},
					 {x: 24040, y: 388},
					 {x: 24264, y: 260},
					 {x: 24320, y: 204},
					 {x: 24376, y: 148},
					 {x: 24432, y: 148},
					 {x: 24600, y: 260},
					 {x: 24656, y: 260},
					 {x: 24880, y: 460},
					 {x: 24936, y: 460},
					 {x: 24992, y: 460},
					 {x: 25272, y: 360},
					 {x: 25238, y: 360},
					 {x: 25384, y: 360},
					 {x: 25664, y: 460},
					 {x: 25720, y: 460},
					 {x: 25776, y: 460},
					 {x: 25640, y: 360},
					 {x: 25696, y: 416},
					 {x: 25752, y: 472},
					 {x: 25808, y: 472},
					 {x: 26088, y: 360},
					 {x: 26144, y: 360},
					 {x: 26200, y: 360},
					 {x: 26256, y: 360},
					 {x: 26536, y: 360},
					 {x: 26592, y: 416},
					 {x: 26648, y: 472},
					 {x: 26704, y: 528},
					 {x: 26760, y: 528},
					 {x: 26984, y: 360},
					 {x: 27040, y: 416},
					 {x: 27096, y: 472},
					 {x: 27152, y: 472},
					 {x: 27376, y: 472},
					 {x: 27432, y: 472},
					 {x: 27488, y: 472},
					 {x: 27712, y: 325},
					 {x: 27768, y: 325},
					 {x: 27824, y: 325},
					 {x: 27936, y: 500},
					 {x: 27992, y: 500},
					 {x: 28048, y: 500},
					 {x: 28272, y: 300},
					 {x: 28328, y: 300},
					 {x: 28384, y: 300},
					 {x: 28608, y: 100},
					 {x: 28664, y: 156},
					 {x: 28720, y: 212},
					 {x: 28776, y: 268},
					 {x: 28832, y: 324},
					 {x: 28888, y: 380},
					 {x: 28944, y: 436},
					 {x: 29000, y: 492},
					 {x: 29056, y: 548},
					 {x: 29112, y: 604}],
	
	spikes: [{x: 400, y: 690},
			 {x: 650, y: 690},
			 {x: 2800, y: 695},
			 {x: 2850, y: 695},
			 {x: 3870, y: 540},
			 {x: 3900, y: 540},
			 {x: 3965, y: 540},
			 {x: 5000, y: 695},
			 {x: 5050, y: 695},
			 {x: 5070, y: 695},
			 {x: 5300, y: 695},
			 {x: 5350, y: 695},
			 {x: 5370, y: 695},
			 {x: 7470, y: 695},
			 {x: 7520, y: 695},
			 {x: 7540, y: 695},
			 {x: 7870, y: 695},
			 {x: 7920, y: 695},
			 {x: 7940, y: 695},
			 {x: 9400, y: 695},
			 {x: 9456, y: 695},
			 {x: 9512, y: 695},
			 {x: 11070, y: 540},
			 {x: 11120, y: 540},
			 {x: 11170, y: 540},
			 {x: 11210, y: 540},
			 {x: 11260, y: 540},
			 {x: 11320, y: 540},
			 {x: 15506, y: 690},
			 {x: 15562, y: 690},
			 {x: 15618, y: 690},
			 {x: 15674, y: 690},
			 {x: 15730, y: 690},
			 {x: 15786, y: 690},
			 {x: 15842, y: 690},
			 {x: 15898, y: 690},
			 {x: 15954, y: 690},
			 {x: 16010, y: 690},
			 {x: 16066, y: 690},
			 {x: 16122, y: 690},
			 {x: 16178, y: 690},
			 {x: 16234, y: 690},
			 {x: 16290, y: 690},
			 {x: 16346, y: 690},
			 {x: 16402, y: 690},
			 {x: 22750, y: 690},
			 {x: 22806, y: 690},
			 {x: 22862, y: 690},],
			 
	spring: [{x: 15450, y: 690},],
	
	coins: [{x: 500, y: 670},
			{x: 950, y: 430},
			{x: 1200, y:670},
			{x: 1600, y: 400},
			{x: 1900, y: 50},
			{x: 2500, y: 200},
			{x: 3000, y: 300},
			{x: 3500, y: 400},
			{x: 3856, y: 670},
			{x: 3912, y: 670},
			{x: 3968, y: 670},
			{x: 4024, y: 670},
			{x: 5200, y: 670},
			{x: 6000, y: 200},
			{x: 6500, y: 200},
			{x: 7000, y: 200},
			{x: 7500, y: 550},
			{x: 7900, y: 550},
			{x: 9000, y: 400},
			{x: 10000, y: 200},
			{x: 16056, y: 200},
			{x: 16112, y: 200},
			{x: 16168, y: 200},
			{x: 16224, y: 200},
			{x: 16280, y: 200},
			{x: 16336, y: 200},
			{x: 16392, y: 200},
			{x: 16448, y: 200},
			{x: 16504, y: 200},
			{x: 16560, y: 200},
			{x: 19000, y: 300},
			{x: 19050, y: 400},
			{x: 21150, y: 300},
			{x: 21800, y: 300},
			{x: 22750, y: 350},
			{x: 23600, y: 150},
			{x: 24000, y: 300},
			{x: 24600, y: 200},
			{x: 26200, y: 275},
			{x: 26750, y: 400},
			{x: 30200, y: 670},
			{x: 30200, y: 570},
			{x: 30200, y: 470},
			{x: 30200, y: 370}],
			
	flags: [{x: 30550, y: 670}]
};

var levelTwo = {
	music: "./sounds/bgm_1.mp3",
	
	coins: [{x: 500, y: 670},
			{x: 950, y: 430},
			{x: 1200, y:670},
			{x: 1600, y: 400},
			{x: 1900, y: 50}],
			
	flags: [{x: 30550, y: 670}]
};

var levelThree = {
	music: "./sounds/bgm_1.mp3",
	
	coins: [{x: 500, y: 670},
			{x: 950, y: 430},
			{x: 1200, y:670},
			{x: 1600, y: 400},
			{x: 1900, y: 50}],
			
	flags: [{x: 30550, y: 670}]
};

var levelFour = {
	music: "./sounds/bgm_1.mp3",
	
	coins: [{x: 500, y: 670},
			{x: 950, y: 430},
			{x: 1200, y:670},
			{x: 1600, y: 400},
			{x: 1900, y: 50}],
			
	flags: [{x: 30550, y: 670}]
};