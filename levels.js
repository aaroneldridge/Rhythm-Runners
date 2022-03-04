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

					 {x: 25216, y: 360},
					 {x: 25272, y: 360},
					 {x: 25328, y: 360},

					 {x: 25552, y: 460},
					 {x: 25608, y: 460},
					 {x: 25664, y: 460},

					 {x: 25808, y: 360},
					 {x: 25864, y: 416},
					 {x: 25920, y: 472},
					 {x: 25976, y: 472},

					 {x: 26200, y: 360},
					 {x: 26256, y: 360},
					 {x: 26312, y: 360},
					 {x: 26368, y: 360},

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

					 {x: 27600, y: 325},
					 {x: 27656, y: 325},
					 {x: 27712, y: 325},

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
	
	spikes: [{x: 600, y: 690},
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

	Grass_Middle: [{x: -400, y: 720},
				   {x: -336, y: 720},
				   {x: -272, y: 720},
				   {x: -208, y: 720},
				   {x: -144, y: 720},
				   {x: -80, y: 720},
				   {x: -16, y: 720},
				   {x: 48, y: 720},
				   {x: 112, y: 720},
				   {x: 176, y: 720},	
				   {x: 240, y: 720},
				   {x: 304, y: 720},
				   {x: 368, y: 720},
				   {x: 432, y: 720},
				   {x: 496, y: 720},
				   {x: 560, y: 720},
				   {x: 624, y: 720},
				   {x: 688, y: 720},
				   {x: 752, y: 720},
				   {x: 816, y: 720},
				   {x: 880, y: 720},
				   {x: 944, y: 720},
				   {x: 1008, y: 720},
				   {x: 1072, y: 720},
				   {x: 1136, y: 720},
				   {x: 1200, y: 720},
				   {x: 1264, y: 720},
				   {x: 1328, y: 720},
				   {x: 1392, y: 720},
				   {x: 1456, y: 720},	
				   {x: 1520, y: 720},
				   {x: 1584, y: 720},
				   {x: 1648, y: 720},
				   {x: 1712, y: 720},
				   {x: 1776, y: 720},
				   {x: 1840, y: 720},
				   {x: 1904, y: 720},
				   {x: 1968, y: 720},
				   {x: 1968, y: 720},
				   {x: 2032, y: 720},

				   {x: 2700, y: 720},
				   {x: 2764, y: 720},
				   {x: 2828, y: 720},
				   {x: 2892, y: 720},
				   {x: 2956, y: 720},
				   {x: 3020, y: 720},
				   {x: 3084, y: 720},
				   {x: 3148, y: 720},
				   {x: 3212, y: 720},
				   {x: 3276, y: 720},	
				   {x: 3340, y: 720},
				   {x: 3404, y: 720},
				   {x: 3468, y: 720},
				   {x: 3532, y: 720},
				   {x: 3596, y: 720},
				   {x: 3660, y: 720},
				   {x: 3724, y: 720},
				   {x: 3788, y: 720},
				   {x: 3852, y: 720},
				   {x: 3916, y: 720},
				   {x: 3980, y: 720},
				   {x: 4044, y: 720},
				   {x: 4108, y: 720},
				   {x: 4172, y: 720},
				   {x: 4236, y: 720},
				   {x: 4300, y: 720},
				   {x: 4364, y: 720},
				   {x: 4428, y: 720},
				   {x: 4492, y: 720},
				   {x: 4556, y: 720},	
				   {x: 4620, y: 720},
				   {x: 4684, y: 720},
				   {x: 4748, y: 720},
				   {x: 4812, y: 720},
				   {x: 4876, y: 720},
				   {x: 4940, y: 720},
				   {x: 5004, y: 720},
				   {x: 5068, y: 720},
				   {x: 5132, y: 720},
				   {x: 5196, y: 720},
				   {x: 5260, y: 720},
				   {x: 5324, y: 720},
				   {x: 5388, y: 720},
				   {x: 5452, y: 720},
				   {x: 5516, y: 720},
				   {x: 5580, y: 720},
				   {x: 5644, y: 720},
				   {x: 5708, y: 720},
				   {x: 5772, y: 720},
				   {x: 5836, y: 720},
				   
				   {x: 7400, y: 720},
				   {x: 7464, y: 720},
				   {x: 7528, y: 720},
				   {x: 7592, y: 720},
				   {x: 7656, y: 720},
				   {x: 7720, y: 720},
				   {x: 7784, y: 720},
				   {x: 7848, y: 720},
				   {x: 7912, y: 720},
				   {x: 7976, y: 720},	
				   {x: 8040, y: 720},
				   {x: 8104, y: 720},
				   {x: 8168, y: 720},
				   {x: 8232, y: 720},
				   {x: 8296, y: 720},
				   {x: 8360, y: 720},
				   {x: 8424, y: 720},
				   {x: 8488, y: 720},
				   {x: 8552, y: 720},
				   {x: 8616, y: 720},
				   {x: 8680, y: 720},
				   {x: 8680, y: 720},
				   {x: 8680, y: 720},
				   {x: 8744, y: 720},
				   {x: 8808, y: 720},
				   {x: 8872, y: 720},
				   {x: 8936, y: 720},
				   {x: 9000, y: 720},
				   {x: 9064, y: 720},
				   {x: 9128, y: 720},	
				   {x: 9192, y: 720},
				   {x: 9256, y: 720},
				   {x: 9320, y: 720},
				   {x: 9384, y: 720},
				   {x: 9448, y: 720},
				   {x: 9512, y: 720},
				   {x: 9576, y: 720},
				   {x: 9640, y: 720},
				   {x: 9704, y: 720},
				   {x: 9768, y: 720},
				   {x: 9832, y: 720},
				   {x: 9896, y: 720},
				   {x: 9960, y: 720},
				   {x: 10024, y: 720},
				   {x: 10088, y: 720},
				   {x: 10152, y: 720},
				   {x: 10216, y: 720},
				   {x: 10280, y: 720},
				   {x: 10344, y: 720},
				   {x: 10408, y: 720},
				   {x: 10472, y: 720},
				   {x: 10536, y: 720},
				   {x: 10600, y: 720},
				   {x: 10664, y: 720},
				   {x: 10728, y: 720},
				   {x: 10792, y: 720},
				   {x: 10856, y: 720},
				   {x: 10920, y: 720},
				   {x: 10984, y: 720},
				   {x: 11048, y: 720},
				   {x: 11112, y: 720},
				   {x: 11176, y: 720},
				   {x: 11240, y: 720},
				   {x: 11304, y: 720},
				   {x: 11368, y: 720},
				   {x: 11432, y: 720},
				   {x: 11496, y: 720},
				   {x: 11560, y: 720},
				   {x: 11624, y: 720},

				   {x: 15000, y: 720},
				   {x: 15064, y: 720},
				   {x: 15128, y: 720},
				   {x: 15192, y: 720},
				   {x: 15256, y: 720},
				   {x: 15320, y: 720},
				   {x: 15384, y: 720},
				   {x: 15448, y: 720},
				   {x: 15512, y: 720},
				   {x: 15576, y: 720},	
				   {x: 15640, y: 720},
				   {x: 15704, y: 720},
				   {x: 15768, y: 720},
				   {x: 15832, y: 720},
				   {x: 15896, y: 720},
				   {x: 15960, y: 720},
				   {x: 16024, y: 720},
				   {x: 16088, y: 720},
				   {x: 16152, y: 720},
				   {x: 16216, y: 720},
				   {x: 16280, y: 720},
				   {x: 16344, y: 720},
				   {x: 16408, y: 720},
				   {x: 16472, y: 720},
				   {x: 16536, y: 720},
				   {x: 16600, y: 720},
				   {x: 16664, y: 720},
				   {x: 16728, y: 720},
				   {x: 16792, y: 720},
				   {x: 16856, y: 720},	
				   {x: 16920, y: 720},
				   {x: 16984, y: 720},
				   {x: 17048, y: 720},
				   {x: 17112, y: 720},
				   {x: 17176, y: 720},
				   {x: 17240, y: 720},
				   {x: 17304, y: 720},
				   {x: 17368, y: 720},
				   {x: 17432, y: 720},
				   {x: 17496, y: 720},
				   {x: 17560, y: 720},
				   {x: 17624, y: 720},
				   {x: 17688, y: 720},
				   {x: 17752, y: 720},
				   {x: 17816, y: 720},
				   {x: 17880, y: 720},
				   {x: 17944, y: 720},
				   {x: 18008, y: 720},
				   {x: 18072, y: 720},
				   {x: 18136, y: 720},
				   {x: 18200, y: 720},
				   {x: 18264, y: 720},
				   {x: 18328, y: 720},
				   {x: 18392, y: 720},
				   {x: 18456, y: 720},
				   {x: 18520, y: 720},
				   {x: 18584, y: 720},
				   {x: 18648, y: 720},
				   {x: 18712, y: 720},
				   {x: 18776, y: 720},
				   {x: 18840, y: 720},
				   {x: 18904, y: 720},
				   {x: 18968, y: 720},
				   {x: 19032, y: 720},
				   {x: 19096, y: 720},
				   {x: 19160, y: 720},
				   {x: 19224, y: 720},
				   {x: 19288, y: 720},
				   {x: 19352, y: 720},
				   {x: 19416, y: 720},
				   {x: 19480, y: 720},
				   {x: 19544, y: 720},
				   {x: 19608, y: 720},
				   {x: 19672, y: 720},
				   {x: 19736, y: 720},
				   {x: 19800, y: 720},
				   {x: 19864, y: 720},
				   {x: 19928, y: 720},
				   {x: 19992, y: 720},
				   {x: 20056, y: 720},
				   {x: 20120, y: 720},
				   {x: 20184, y: 720},
				   {x: 20248, y: 720},
				   {x: 20312, y: 720},
				   {x: 20376, y: 720},
				   {x: 20440, y: 720},
				   {x: 20504, y: 720},
				   {x: 20568, y: 720},
				   {x: 20632, y: 720},
				   {x: 20696, y: 720},

				   {x: 22150, y: 720},
				   {x: 22214, y: 720},
				   {x: 22278, y: 720},
				   {x: 22342, y: 720},
				   {x: 22406, y: 720},
				   {x: 22470, y: 720},
				   {x: 22534, y: 720},
				   {x: 22598, y: 720},
				   {x: 22662, y: 720},
				   {x: 22726, y: 720},
				   {x: 22790, y: 720},
				   {x: 22854, y: 720},
				   {x: 22918, y: 720},
				   {x: 22982, y: 720},
				   {x: 23046, y: 720},
				   {x: 23110, y: 720},
				   {x: 23174, y: 720},
				   {x: 23238, y: 720},
				   {x: 23302, y: 720},
				   {x: 23366, y: 720},
				   {x: 23430, y: 720},
				   {x: 23494, y: 720},
				   {x: 23558, y: 720},
				   {x: 23622, y: 720},
				   {x: 23686, y: 720},
				   {x: 23750, y: 720},
				   {x: 23814, y: 720},
				   {x: 23878, y: 720},
				   {x: 23942, y: 720},
				   {x: 24006, y: 720},
				   {x: 24070, y: 720},
				   {x: 24134, y: 720},
				   {x: 24198, y: 720},
				   {x: 24262, y: 720},
				   {x: 24326, y: 720},
				   {x: 24390, y: 720},
				   {x: 24454, y: 720},
				   {x: 24518, y: 720},
				   {x: 24582, y: 720},
				   {x: 24646, y: 720},

				   {x: 26000, y: 720},
				   {x: 26064, y: 720},
				   {x: 26128, y: 720},
				   {x: 26192, y: 720},
				   {x: 26256, y: 720},
				   {x: 26320, y: 720},
				   {x: 26384, y: 720},
				   {x: 26448, y: 720},
				   {x: 26512, y: 720},
				   {x: 26576, y: 720},
				   {x: 26640, y: 720},
				   {x: 26704, y: 720},
				   {x: 26768, y: 720},
				   {x: 26832, y: 720},
				   {x: 26896, y: 720},
				   {x: 26960, y: 720},
				   {x: 27024, y: 720},
				   {x: 27088, y: 720},
				   {x: 27152, y: 720},
				   {x: 27216, y: 720},

				   {x: 29000, y: 720},
				   {x: 29064, y: 720},
				   {x: 29128, y: 720},
				   {x: 29192, y: 720},
				   {x: 29256, y: 720},
				   {x: 29320, y: 720},
				   {x: 29384, y: 720},
				   {x: 29448, y: 720},
				   {x: 29512, y: 720},
				   {x: 29576, y: 720},
				   {x: 29640, y: 720},
				   {x: 29704, y: 720},
				   {x: 29768, y: 720},
				   {x: 29832, y: 720},
				   {x: 29896, y: 720},
				   {x: 29960, y: 720},
				   {x: 30024, y: 720},
				   {x: 30088, y: 720},
				   {x: 30152, y: 720},
				   {x: 30216, y: 720},
				   {x: 30280, y: 720},
				   {x: 30344, y: 720},
				   {x: 30408, y: 720},
				   {x: 30472, y: 720},
				   {x: 30536, y: 720},
				   {x: 30600, y: 720},
				   {x: 30664, y: 720},
				   {x: 30728, y: 720},
				   {x: 30792, y: 720},
				   {x: 30856, y: 720},
				   {x: 30920, y: 720},
				   {x: 30984, y: 720},
				   {x: 30984, y: 720},
				   {x: 31048, y: 720},
				   {x: 31112, y: 720},
				   {x: 31176, y: 720},
				   {x: 31240, y: 720},
				   {x: 31304, y: 720},
	
	],
			
	flags: [{x: 30550, y: 670}]
};

var levelTwo = {
	music: "./sounds/level2.mp3",
	
	platform_tiles: [{x: 600, y: 500},
		{x: 656, y: 500},
		{x: 824, y: 300},
		{x: 880, y: 300},
		{x: 1048, y: 100},
		{x: 1104, y: 100},
		{x: 1272, y: 300},
		{x: 1328, y: 300},
		{x: 1496, y: 350},
		{x: 1552, y: 400},
		{x: 1608, y: 450},
		{x: 1664, y: 450},
		{x: 1832, y: 300},
		{x: 1884, y: 300},
		{x: 2052, y: 100},
		{x: 2108, y: 100},
		{x: 2276, y: 500},
		{x: 2332, y: 500},
		{x: 2500, y: 300},
		{x: 2556, y: 300},
		{x: 2612, y: 250},
		{x: 2668, y: 200},
		{x: 2836, y: 300},
		{x: 2892, y: 300},
		{x: 3060, y: 100},
		{x: 3116, y: 100},
		{x: 3284, y: 500},
		{x: 3340, y: 500},
		{x: 3508, y: 300},
		{x: 3564, y: 300},
		{x: 3788, y: 300},
		{x: 3844, y: 300},
		{x: 4012, y: 500},
		{x: 4068, y: 500},
		{x: 4236, y: 300},
		{x: 4292, y: 300},
		{x: 4572, y: 300},
		{x: 4628, y: 300},
		{x: 4684, y: 350},
		{x: 4740, y: 400},
		{x: 4796, y: 450},
		{x: 4852, y: 500},
		{x: 4908, y: 500},
		{x: 5076, y: 300},
		{x: 5132, y: 300},
		{x: 5300, y: 500},
		{x: 5356, y: 500},
		{x: 5524, y: 300},
		{x: 5580, y: 300},
		{x: 5748, y: 100},
		{x: 5804, y: 100},
		{x: 6028, y: 100},
		{x: 6084, y: 100},
		{x: 6252, y: 500},
		{x: 6308, y: 500},
		{x: 6476, y: 350},
		{x: 6532, y: 300},
		{x: 6588, y: 250},
		{x: 6812, y: 100},
		{x: 6868, y: 100},
		{x: 7092, y: 100},
		{x: 7148, y: 100},
		{x: 7204, y: 150},
		{x: 7260, y: 200},
		{x: 7428, y: 300},
		{x: 7484, y: 300},
		{x: 7708, y: 300},
		{x: 7764, y: 300},
		{x: 7820, y: 350},
		{x: 7876, y: 400},
		{x: 8044, y: 500},
		{x: 8100, y: 500},
		{x: 8324, y: 500},
		{x: 8380, y: 500},
		{x: 8548, y: 300},
		{x: 8604, y: 300},
		{x: 8772, y: 100},
		{x: 8828, y: 100},
		{x: 8996, y: 500},
		{x: 9052, y: 500},
		{x: 9220, y: 300},
		{x: 9276, y: 300},
		{x: 9444, y: 100},
		{x: 9500, y: 100},
		{x: 9556, y: 150},
		{x: 9612, y: 200},
		{x: 9780, y: 300},
		{x: 9836, y: 300},
		{x: 10004, y: 500},
		{x: 10060, y: 500},
		{x: 10284, y: 500},
		{x: 10340, y: 500},
		{x: 10564, y: 500},
		{x: 10620, y: 500},
		{x: 10788, y: 300},
		{x: 10844, y: 300},
		{x: 11012, y: 100},
		{x: 11068, y: 100},
		{x: 11236, y: 500},
		{x: 11292, y: 500},
		{x: 11460, y: 300},
		{x: 11516, y: 300},
		{x: 11684, y: 100},
		{x: 11740, y: 100},

		{x: 13140, y: 500},
		{x: 13196, y: 500},
		{x: 13364, y: 300},
		{x: 13420, y: 300},
		{x: 13588, y: 500},
		{x: 13644, y: 500},
		{x: 13812, y: 300},
		{x: 13868, y: 300},
		{x: 14036, y: 100},
		{x: 14092, y: 100},
		{x: 14260, y: 300},
		{x: 14316, y: 300},
		{x: 14484, y: 500},
		{x: 14540, y: 500},

		{x: 14764, y: 500},
		{x: 14820, y: 450},
		{x: 14876, y: 400},
		{x: 14932, y: 400},

		{x: 15156, y: 400},
		{x: 15212, y: 400},
		{x: 15380, y: 300},
		{x: 15436, y: 300}, // add coin in this area so they know they have to JUMP off platform

		{x: 15940, y: 500},
		{x: 15996, y: 500},
		{x: 16164, y: 300}, // add a coin so they know to JUMP
		
		{x: 17676, y: 500},
		{x: 17732, y: 500},
		{x: 17900, y: 300},
		{x: 17956, y: 300},
		{x: 18124, y: 100},
		{x: 18180, y: 100},
		{x: 18348, y: 500},
		{x: 18404, y: 500},
		{x: 18572, y: 300},
		{x: 18628, y: 300},

		{x: 18852, y: 300},
		{x: 18908, y: 300},
		{x: 18964, y: 350},
		{x: 19020, y: 400},

		{x: 19244, y: 300},
		{x: 19300, y: 300},
		{x: 19356, y: 300},
		{x: 19412, y: 350},
		{x: 19468, y: 400},

		{x: 19636, y: 500},
		{x: 19692, y: 500},
		{x: 19860, y: 300},
		{x: 19916, y: 300},

		// up then down
		{x: 20140, y: 300},
		{x: 20196, y: 250},
		{x: 20252, y: 200},
		{x: 20308, y: 200},
		{x: 20364, y: 200},
		{x: 20420, y: 200},
		{x: 20476, y: 200},
		{x: 20532, y: 250},
		{x: 20588, y: 300},

		{x: 20756, y: 500},
		{x: 20812, y: 500},

		{x: 21036, y: 500},
		{x: 21092, y: 500},

		{x: 21316, y: 500},
		{x: 21372, y: 500},

		{x: 21540, y: 500},
		{x: 21596, y: 500},
		{x: 21652, y: 450},
		{x: 21708, y: 400},

		{x: 21988, y: 400},
		{x: 22044, y: 400},

		{x: 22324, y: 400},
		{x: 22380, y: 400},

		{x: 22604, y: 400},
		{x: 22660, y: 400},
		{x: 22716, y: 450},
		{x: 22772, y: 500},

		{x: 23052, y: 500},
		{x: 23108, y: 500},
		{x: 23276, y: 300},
		{x: 23332, y: 300},
		{x: 23500, y: 100},
		{x: 23556, y: 100},

		{x: 23836, y: 100},
		{x: 23892, y: 100},
		{x: 23948, y: 150},
		{x: 24004, y: 200},

		{x: 24172, y: 300},
		{x: 24228, y: 300},

		{x: 24396, y: 100},
		{x: 24452, y: 100},
		{x: 24620, y: 300},
		{x: 24676, y: 300},

		{x: 24900, y: 300},
		{x: 24956, y: 300},
		{x: 25012, y: 250},
		{x: 25068, y: 200},

		{x: 25292, y: 100},
		{x: 25348, y: 100},
		{x: 25516, y: 500},
		{x: 25572, y: 500},

		{x: 25852, y: 500},
		{x: 25908, y: 500},
		{x: 25964, y: 450},
		{x: 26020, y: 400},

		{x: 26188, y: 300},
		{x: 26244, y: 300},

		{x: 26412, y: 100},
		{x: 26468, y: 100},
		{x: 26524, y: 150},
		{x: 26580, y: 200},

		{x: 26748, y: 500},
		{x: 26804, y: 500},
		{x: 26972, y: 300},
		{x: 27028, y: 300},
		{x: 27196, y: 500},
		{x: 27252, y: 500},
		{x: 27420, y: 300},
		{x: 27476, y: 300},

		{x: 27644, y: 200},
		{x: 27700, y: 150},
		{x: 27756, y: 100},
		{x: 27812, y: 100},

		{x: 28036, y: 100},
		{x: 28092, y: 100},
		{x: 28260, y: 500},
		{x: 28316, y: 500},

		{x: 28484, y: 400},
		{x: 28540, y: 350},
		{x: 28596, y: 300},
		{x: 28652, y: 300},

		{x: 28820, y: 500},
		{x: 28876, y: 500},
		{x: 29044, y: 300},
		{x: 29100, y: 300},
		{x: 29268, y: 500},
		{x: 29324, y: 500},

		{x: 29492, y: 300},
		{x: 29548, y: 300},
		{x: 29716, y: 100},
		{x: 29772, y: 100},
		{x: 29828, y: 150},
		{x: 29884, y: 200},
		{x: 30052, y: 500},
		{x: 30108, y: 500},

		{x: 30332, y: 300},
		{x: 30388, y: 300},

		{x: 30556, y: 400},
		{x: 30612, y: 350},
		{x: 30668, y: 300},
		{x: 30724, y: 300},

		{x: 30948, y: 200},
		{x: 31004, y: 150},
		{x: 31060, y: 100},
		{x: 31116, y: 100},

		{x: 31340, y: 100},
		{x: 31396, y: 100},
		{x: 31564, y: 500},
		{x: 31620, y: 500},

		{x: 31788, y: 300},
		{x: 31844, y: 300},
		{x: 32012, y: 500},
		{x: 32068, y: 500}
	],

	spikes: [
			 {x: 12244, y: 690},
		     {x: 12300, y: 690},
			 {x: 12748, y: 690},
		     {x: 12804, y: 690},

			 {x: 16780, y: 690},
		     {x: 16836, y: 690},
			 {x: 17284, y: 690},
		     {x: 17340, y: 690},
			 
			 {x: 32772, y: 690},
		     {x: 32828, y: 690},

	],

	coins: [{x: 500, y: 670},
			{x: 950, y: 430},
			{x: 1200, y:670},
			{x: 1600, y: 400},
			{x: 1900, y: 50}],

	Grass_Middle: [{x: -400, y: 720},
				{x: -336, y: 720},
				{x: -272, y: 720},
				{x: -208, y: 720},
				{x: -144, y: 720},
				{x: -80, y: 720},
				{x: -16, y: 720},
				{x: 48, y: 720},
				{x: 112, y: 720},
				{x: 176, y: 720},	
				{x: 240, y: 720},
				{x: 304, y: 720},
				{x: 368, y: 720},
				{x: 432, y: 720},
				{x: 496, y: 720},
				{x: 560, y: 720},
				{x: 624, y: 720},
				{x: 688, y: 720},
				{x: 752, y: 720},
				{x: 816, y: 720},
				{x: 880, y: 720},
				{x: 944, y: 720},
				{x: 1008, y: 720},
				{x: 1072, y: 720},
				{x: 1136, y: 720},
				{x: 1200, y: 720},
				{x: 1264, y: 720},
				{x: 1328, y: 720},
				{x: 1392, y: 720},
				{x: 1456, y: 720},	
				{x: 1520, y: 720},
				{x: 1584, y: 720},
				{x: 1648, y: 720},
				{x: 1712, y: 720},
				{x: 1776, y: 720},
				{x: 1840, y: 720},
				{x: 1904, y: 720},
				{x: 1968, y: 720},
				{x: 1968, y: 720},
				{x: 2032, y: 720},

				{x: 12000, y: 720},
				{x: 12064, y: 720},
				{x: 12128, y: 720},
				{x: 12192, y: 720},
				{x: 12256, y: 720},
				{x: 12320, y: 720},
				{x: 12384, y: 720},
				{x: 12448, y: 720},
				{x: 12512, y: 720},
				{x: 12576, y: 720},
				{x: 12640, y: 720},
				{x: 12704, y: 720},
				{x: 12768, y: 720},
				{x: 12832, y: 720},
				{x: 12896, y: 720},
				{x: 12960, y: 720},
				{x: 13024, y: 720},
				{x: 13088, y: 720},
				{x: 13152, y: 720},
				{x: 13216, y: 720},	
				{x: 13280, y: 720},
				{x: 13344, y: 720},
				{x: 13408, y: 720},
				{x: 13472, y: 720},
				{x: 13536, y: 720},
				{x: 13600, y: 720},
				{x: 13664, y: 720},
				{x: 13728, y: 720},
				{x: 13792, y: 720},
				{x: 13856, y: 720},
				{x: 13920, y: 720},
				{x: 13984, y: 720},
				{x: 14048, y: 720},
				{x: 14112, y: 720},
				{x: 14176, y: 720},
				{x: 14240, y: 720},
				{x: 14304, y: 720},
				{x: 14368, y: 720},
				{x: 14432, y: 720},
				{x: 14496, y: 720},
				{x: 14560, y: 720},
				{x: 14624, y: 720},
				{x: 14688, y: 720},
				{x: 14752, y: 720},
				{x: 14816, y: 720},
				{x: 14880, y: 720},
				{x: 14944, y: 720},
				{x: 15008, y: 720},
				{x: 15072, y: 720},
				{x: 15136, y: 720},	
				{x: 15200, y: 720},
				{x: 15264, y: 720},
				{x: 15328, y: 720},
				{x: 15392, y: 720},
				{x: 15456, y: 720},
				{x: 15520, y: 720},
				{x: 15584, y: 720},
				{x: 15648, y: 720},
				{x: 15712, y: 720},
				{x: 15776, y: 720},

				{x: 15840, y: 720},
				{x: 15904, y: 720},
				{x: 15968, y: 720},
				{x: 16032, y: 720},
				{x: 16096, y: 720},
				{x: 16160, y: 720},
				{x: 16224, y: 720},
				{x: 16288, y: 720},
				{x: 16352, y: 720},
				{x: 16416, y: 720},
				{x: 16480, y: 720},
				{x: 16544, y: 720},
				{x: 16608, y: 720},
				{x: 16672, y: 720},
				{x: 16736, y: 720},
				{x: 16800, y: 720},
				{x: 16864, y: 720},
				{x: 16928, y: 720},
				{x: 16992, y: 720},
				{x: 17056, y: 720},
				{x: 17120, y: 720},
				{x: 17184, y: 720},	
				{x: 17248, y: 720},
				{x: 17312, y: 720},
				{x: 17376, y: 720},
				{x: 17440, y: 720},
				{x: 17504, y: 720},
				{x: 17568, y: 720},
				{x: 17632, y: 720},
				{x: 17696, y: 720},
				{x: 17760, y: 720},
				{x: 17824, y: 720},
				{x: 17888, y: 720},
				{x: 17952, y: 720},
				{x: 18016, y: 720},

				{x: 32142, y: 720},
				{x: 32206, y: 720},
				{x: 32270, y: 720},
				{x: 32334, y: 720},
				{x: 32398, y: 720},
				{x: 32462, y: 720},
				{x: 32526, y: 720},
				{x: 32590, y: 720},
				{x: 32654, y: 720},	
				{x: 32718, y: 720},
				{x: 32782, y: 720},
				{x: 32846, y: 720},
				{x: 32910, y: 720},
				{x: 32974, y: 720},
				{x: 33038, y: 720},
				{x: 33102, y: 720},
				{x: 33166, y: 720},
				{x: 33230, y: 720},
				{x: 33294, y: 720},
				{x: 33358, y: 720},
				{x: 33422, y: 720},	
				{x: 33486, y: 720},
				{x: 33550, y: 720},
				{x: 33614, y: 720},
				{x: 33678, y: 720},
				{x: 33742, y: 720},
				{x: 33806, y: 720},
				{x: 33870, y: 720},
				{x: 33934, y: 720},
				{x: 33998, y: 720},
				{x: 34062, y: 720},
				{x: 34126, y: 720},
				{x: 34190, y: 720},
				{x: 34254, y: 720},

	],
			
	flags: [{x: 33500, y: 670}]
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