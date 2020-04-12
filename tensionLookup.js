var tensionLookup = (function() {

	DEFAULT_TENSOMETER = "ParkTool TM-1";
	tensometer = DEFAULT_TENSOMETER;

	var tensionTable = {

		// Source: http://www.parktool.com/documents/85161752fcd5df39d15205f80776303d05e6c84c.pdf
		// (linked from http://www.parktool.com/blog/repair-help/wheel-tension-measurement)
		"ParkTool TM-1" : {
			"2.3" : {
				22: 54,
				23: 59,
				24: 66,
				25: 73,
				26: 82,
				27: 92,
				28: 104,
				29: 117,
				30: 133,
				31: 151,
				32: 172
			},

			"2": {
				17: 53,
				18: 58,
				19: 63,
				20: 70,
				21: 77,
				22: 86,
				23: 96,
				24: 107,
				25: 120,
				26: 135,
				27: 153,
				28: 172
			},

			"1.8": {
				14: 53,
				15: 58,
				16: 64,
				17: 70,
				18: 77,
				19: 85,
				20: 94,
				21: 105,
				22: 117,
				23: 131,
				24: 148,
				25: 167
			},

			"1.6": {
				11: 54,
				12: 58,
				13: 64,
				14: 70,
				15: 76,
				16: 84,
				17: 93,
				18: 103,
				19: 114,
				20: 128,
				21: 143,
				22: 160
			},

			"1.5": {
				9: 52,
				10: 56,
				11: 61,
				12: 66,
				13: 73,
				14: 80,
				15: 88,
				16: 97,
				17: 107,
				18: 119,
				19: 133,
				20: 148,
				21: 166
			}
		},

		"Unior": {
			// Source: https://uniortools.com/res/documents/836571.pdf
			// Linked from https://uniortools.com/eng/product/1752-2-spoke-tension-meter
			"1.80-1.40-1.80": {
				33: 50,
				34: 55,
				35: 60,
				36: 65,
				37: 70,
				38: 75,
				39: 80,
				40: 90,
				41: 95,
				42: 100,
				43: 110,
				44: 115,
				45: 120,
				46: 130,
				47: 140,
				48: 150,
				49: 165,
				50: 185,
				51: 200
			},

			"2.00-1.50-2.00": {
				36: 50,
				37: 55,
				38: 60,
				39: 65,
				40: 70,
				41: 75,
				42: 80,
				43: 90,
				44: 95,
				45: 100,
				46: 110,
				47: 120,
				48: 130,
				49: 140,
				50: 150,
				51: 165,
				52: 185,
				53: 200
			},

			"2.00-1.65-2.00": {
				40: 50,
				41: 55,
				42: 60,
				43: 65,
				44: 70,
				45: 75,
				46: 80,
				47: 90,
				48: 95,
				49: 100,
				50: 110,
				51: 120,
				52: 130,
				53: 140,
				54: 155,
				55: 175,
				56: 195
			},

			"2.00-1.70-2.00": {
				42: 50,
				43: 55,
				44: 60,
				45: 65,
				46: 70,
				47: 80,
				48: 90,
				49: 95,
				50: 100,
				51: 110,
				52: 120,
				53: 130,
				54: 140,
				55: 155,
				56: 175,
				57: 195
			},

			"2.20-1.80-2.00": {
				44: 50,
				45: 55,
				46: 60,
				47: 65,
				48: 70,
				49: 75,
				50: 85,
				51: 100,
				52: 110,
				53: 120,
				54: 130,
				55: 145,
				56: 160,
				57: 170,
				58: 190
			},

			"2.00-1.80-2.00": {
				43: 50,
				44: 55,
				45: 60,
				46: 65,
				47: 70,
				48: 75,
				49: 80,
				50: 85,
				51: 90,
				52: 100,
				53: 110,
				54: 120,
				55: 135,
				56: 155,
				57: 170,
				58: 180,
				59: 195
			},

			"2.00-2.00-2.00": {
				50: 50,
				51: 55,
				52: 60,
				53: 70,
				54: 80,
				55: 90,
				56: 100,
				57: 110,
				58: 120,
				59: 130,
				60: 145,
				61: 165,
				62: 190
			},

			"2.30-2.00-2.00": {
				51: 50,
				52: 55,
				53: 60,
				54: 70,
				55: 80,
				56: 90,
				57: 100,
				58: 110,
				59: 120,
				60: 130,
				61: 145,
				62: 165,
				63: 185,
				64: 200
			},

			"2.30-2.30-2.30": {
				57: 50,
				58: 60,
				59: 70,
				60: 80,
				61: 90,
				62: 100,
				63: 110,
				64: 120,
				65: 130,
				66: 145,
				67: 170,
				68: 195
			},

			"bladed_0.9x1.8": {
				24: 50,
				25: 55,
				26: 60,
				27: 65,
				28: 70,
				29: 80,
				30: 90,
				31: 100,
				32: 110,
				33: 120,
				34: 135,
				35: 155,
				36: 175,
				37: 195
			},

			"bladed_0.9x2.2": {
				25: 50,
				26: 55,
				27: 60,
				28: 65,
				29: 70,
				30: 75,
				31: 80,
				32: 85,
				33: 90,
				34: 100,
				35: 105,
				36: 110,
				37: 120,
				38: 130,
				39: 140,
				40: 155,
				41: 175,
				42: 195
			},

			"bladed_0.9x3.5": {
				27: 50,
				28: 55,
				29: 60,
				30: 65,
				31: 70,
				32: 75,
				33: 80,
				34: 85,
				35: 90,
				36: 100,
				37: 110,
				38: 120,
				39: 130,
				40: 140,
				41: 150,
				42: 160,
				43: 175,
				44: 195
			},

			"bladed_1.2x2.6": {
				30: 50,
				31: 55,
				32: 60,
				33: 65,
				34: 70,
				35: 75,
				36: 80,
				37: 85,
				38: 90,
				39: 100,
				40: 110,
				41: 120,
				42: 130,
				43: 140,
				44: 150,
				45: 165,
				46: 180,
				47: 195
			},

			"bladed_1.2x2.2": {
				31: 50,
				32: 55,
				33: 60,
				34: 65,
				35: 70,
				36: 75,
				37: 80,
				38: 90,
				39: 95,
				40: 100,
				41: 110,
				42: 120,
				43: 130,
				44: 140,
				45: 155,
				46: 175,
				47: 190,
				48: 200
			},

			"bladed_1.3x2.3": {
				35: 50,
				36: 55,
				37: 60,
				38: 65,
				39: 70,
				40: 80,
				41: 90,
				42: 95,
				43: 100,
				44: 110,
				45: 120,
				46: 130,
				47: 140,
				48: 150,
				49: 160,
				50: 175,
				51: 195
			},

			"bladed_1.3x2.8": {
				35: 50,
				36: 55,
				37: 60,
				38: 65,
				39: 70,
				40: 80,
				41: 85,
				42: 90,
				43: 100,
				44: 110,
				45: 120,
				46: 130,
				47: 145,
				48: 165,
				49: 180,
				50: 195
			}
		},

		"DT Tensio": {
			// Source: https://dycteyr72g97f.cloudfront.net/uploads/TDXTAXXNMADEFS/MAN_TDXTAXXNMADEFS_WEB_ZZ_001.pdf
			// Linked from https://www.dtswiss.com/en/support/manuals/
			"DT Champion 1.8": {
				0.68: 30,
				0.94: 40,
				1.14: 50,
				1.23: 55,
				1.31: 60,
				1.38: 65,
				1.45: 70,
				1.51: 75,
				1.57: 80,
				1.63: 85,
				1.68: 90,
				1.73: 95,
				1.77: 100,
				1.82: 105,
				1.86: 110,
				1.90: 115,
				1.94: 120,
				2.01: 130,
				2.08: 140,
				2.14: 150,
				2.20: 160,
				2.26: 170,
				2.31: 180
			},
			"DT Champion 2.0": {
				1.18: 30,
				1.42: 40,
				1.61: 50,
				1.69: 55,
				1.76: 60,
				1.83: 65,
				1.89: 70,
				1.95: 75,
				2.00: 80,
				2.05: 85,
				2.10: 90,
				2.15: 95,
				2.19: 100,
				2.23: 105,
				2.27: 110,
				2.31: 115,
				2.34: 120,
				2.41: 130,
				2.47: 140,
				2.53: 150,
				2.59: 160,
				2.64: 170,
				2.68: 180,
				2.73: 190,
				2.77: 200,
				2.85: 220,
				2.93: 240
			},
			"DT Champion 2.34": {
				2.09: 30,
				2.31: 40,
				2.48: 50,
				2.55: 55,
				2.61: 60,
				2.68: 65,
				2.73: 70,
				2.78: 75,
				2.83: 80,
				2.88: 85,
				2.92: 90,
				2.96: 95,
				3.00: 100,
				3.04: 105,
				3.07: 110,
				3.11: 115,
				3.14: 120,
				3.20: 130,
				3.26: 140,
				3.31: 150,
				3.36: 160,
				3.40: 170,
				3.45: 180,
				3.49: 190,
				3.53: 200,
				3.60: 220,
				3.66: 240
			},
			"DT Competition 1.8/1.6": {
				0.36: 30,
				0.62: 40,
				0.82: 50,
				0.91: 55,
				0.99: 60,
				1.06: 65,
				1.13: 70,
				1.19: 75,
				1.25: 80,
				1.30: 85,
				1.35: 90,
				1.40: 95,
				1.45: 100,
				1.49: 105,
				1.54: 110,
				1.58: 115,
				1.61: 120,
				1.69: 130,
				1.75: 140,
				1.82: 150,
				1.87: 160,
				1.93: 170,
				1.98: 180
			},
			"DT Competition 2.0/1.8": {
				0.71: 30,
				0.97: 40,
				1.17: 50,
				1.26: 55,
				1.34: 60,
				1.41: 65,
				1.48: 70,
				1.54: 75,
				1.60: 80,
				1.65: 85,
				1.70: 90,
				1.75: 95,
				1.80: 100,
				1.84: 105,
				1.89: 110,
				1.93: 115,
				1.96: 120,
				2.04: 130,
				2.10: 140,
				2.17: 150,
				2.22: 160,
				2.28: 170,
				2.33: 180
			},
			"DT Super Comp 2.0/1.7/1.8": {
				0.49: 30,
				0.75: 40,
				0.95: 50,
				1.03: 55,
				1.11: 60,
				1.18: 65,
				1.25: 70,
				1.31: 75,
				1.37: 80,
				1.42: 85,
				1.47: 90,
				1.52: 95,
				1.57: 100,
				1.61: 105,
				1.65: 110,
				1.69: 115,
				1.73: 120,
				1.80: 130,
				1.87: 140,
				1.93: 150,
				1.99: 160,
				2.04: 170,
				2.09: 180
			},
			"DT Revolution 1.8/1.5": {
				0.15: 30,
				0.41: 40,
				0.61: 50,
				0.70: 55,
				0.78: 60,
				0.85: 65,
				0.92: 70,
				0.98: 75,
				1.04: 80,
				1.09: 85,
				1.15: 90,
				1.19: 95,
				1.24: 100,
				1.28: 105,
				1.33: 110,
				1.37: 115,
				1.41: 120,
				1.48: 130,
				1.54: 140,
				1.61: 150,
				1.67: 160,
				1.72: 170,
				1.77: 180
			},
			"DT Revolution 2.0/1.5": {
				0.20: 30,
				0.46: 40,
				0.66: 50,
				0.74: 55,
				0.82: 60,
				0.89: 65,
				0.96: 70,
				1.02: 75,
				1.07: 80,
				1.13: 85,
				1.18: 90,
				1.23: 95,
				1.27: 100,
				1.32: 105,
				1.36: 110,
				1.40: 115,
				1.43: 120,
				1.51: 130,
				1.57: 140,
				1.63: 150,
				1.69: 160,
				1.74: 170,
				1.79: 180
			},
			"DT New Aero 2.0/1.0/3.3": {
				0.19: 50,
				0.27: 55,
				0.33: 60,
				0.40: 65,
				0.46: 70,
				0.51: 75,
				0.56: 80,
				0.61: 85,
				0.65: 90,
				0.70: 95,
				0.74: 100,
				0.78: 105,
				0.81: 110,
				0.85: 115,
				0.88: 120,
				0.94: 130,
				1.00: 140,
				1.06: 150,
				1.11: 160,
				1.16: 170,
				1.20: 180,
				1.24: 190,
				1.28: 200,
				1.36: 220,
				1.43: 240
			},
			"DT Aero Speed 1.8/1.2/2.3": {
				0.04: 30,
				0.28: 40,
				0.46: 50,
				0.54: 55,
				0.62: 60,
				0.68: 65,
				0.74: 70,
				0.80: 75,
				0.86: 80,
				0.91: 85,
				0.95: 90,
				1.00: 95,
				1.04: 100,
				1.08: 105,
				1.12: 110,
				1.16: 115,
				1.19: 120,
				1.26: 130,
				1.32: 140,
				1.38: 150,
				1.43: 160,
				1.48: 170,
				1.53: 180
			},
			"DT Aero Comp coated 2.0/1.25/2.3": {
				0.12: 40,
				0.33: 50,
				0.42: 55,
				0.50: 60,
				0.57: 65,
				0.64: 70,
				0.71: 75,
				0.77: 80,
				0.82: 85,
				0.88: 90,
				0.93: 95,
				0.97: 100,
				1.02: 105,
				1.06: 110,
				1.10: 115,
				1.14: 120,
				1.22: 130,
				1.29: 140,
				1.35: 150,
				1.41: 160,
				1.47: 170,
				1.52: 180,
				1.62: 200,
				1.71: 220,
				1.79: 240
			},
			"DT Aero Comp 2.0/1.25/2.3": {
				0.08: 40,
				0.29: 50,
				0.38: 55,
				0.46: 60,
				0.53: 65,
				0.60: 70,
				0.67: 75,
				0.73: 80,
				0.78: 85,
				0.84: 90,
				0.89: 95,
				0.93: 100,
				0.98: 105,
				1.02: 110,
				1.06: 115,
				1.10: 120,
				1.18: 130,
				1.25: 140,
				1.31: 150,
				1.37: 160,
				1.43: 170,
				1.48: 180,
				1.58: 200,
				1.67: 220,
				1.75: 240
			},
			"DT Aerolite 2.0/0.9x2.3": {
				0.09: 70,
				0.14: 75,
				0.19: 80,
				0.24: 85,
				0.29: 90,
				0.33: 95,
				0.37: 100,
				0.41: 105,
				0.45: 110,
				0.48: 115,
				0.51: 120,
				0.58: 130,
				0.64: 140,
				0.69: 150,
				0.74: 160,
				0.79: 170,
				0.83: 180
			},
			"DT Alpine 2.34/2.0": {
				2.06: 30,
				2.28: 40,
				2.45: 50,
				2.52: 55,
				2.59: 60,
				2.65: 65,
				2.70: 70,
				2.76: 75,
				2.80: 80,
				2.85: 85,
				2.89: 90,
				2.93: 95,
				2.97: 100,
				3.01: 105,
				3.05: 110,
				3.08: 115,
				3.11: 120,
				3.17: 130,
				3.23: 140,
				3.28: 150,
				3.33: 160,
				3.38: 170,
				3.42: 180,
				3.46: 190,
				3.50: 200,
				3.57: 220,
				3.64: 240
			},
			"DT Alpine III 2.34/1.8/2.0": {
				0.94: 30,
				1.19: 40,
				1.38: 50,
				1.46: 55,
				1.54: 60,
				1.61: 65,
				1.67: 70,
				1.73: 75,
				1.79: 80,
				1.84: 85,
				1.89: 90,
				1.94: 95,
				1.98: 100,
				2.03: 105,
				2.07: 110,
				2.11: 115,
				2.14: 120,
				2.21: 130,
				2.28: 140,
				2.34: 150,
				2.39: 160,
				2.45: 170,
				2.50: 180
			}
		},
		
		"DT Tensio 2": {
			// Source: https://dycteyr72g97f.cloudfront.net/uploads/TDXT2XXNMADEFS/MAN_TDXT2XXNMADEFS_WEB_ZZ_001.pdf
			// Linked from https://www.dtswiss.com/en/support/manuals/
			"DT Champion 1.8": {
				0.58: 30,
				0.86: 40,
				1.08: 50,
				1.17: 55,
				1.26: 60,
				1.34: 65,
				1.41: 70,
				1.48: 75,
				1.54: 80,
				1.60: 85,
				1.65: 90,
				1.71: 95,
				1.76: 100,
				1.81: 105,
				1.85: 110,
				1.90: 115,
				1.94: 120,
				2.02: 130,
				2.09: 140,
				2.16: 150,
				2.22: 160,
				2.28: 170,
				2.33: 180
			},
			"DT Champion 2.0": {
				1.04: 30,
				1.31: 40,
				1.53: 50,
				1.62: 55,
				1.70: 60,
				1.78: 65,
				1.85: 70,
				1.91: 75,
				1.98: 80,
				2.03: 85,
				2.09: 90,
				2.14: 95,
				2.19: 100,
				2.24: 105,
				2.28: 110,
				2.32: 115,
				2.37: 120,
				2.44: 130,
				2.51: 140,
				2.58: 150,
				2.64: 160,
				2.70: 170,
				2.75: 180,
				2.85: 200,
				2.95: 220,
				3.03: 240
			},
			"DT Champion 2.34": {
				1.98: 30,
				2.23: 40,
				2.43: 50,
				2.51: 55,
				2.59: 60,
				2.66: 65,
				2.72: 70,
				2.78: 75,
				2.84: 80,
				2.89: 85,
				2.94: 90,
				2.99: 95,
				3.03: 100,
				3.07: 105,
				3.12: 110,
				3.15: 115,
				3.19: 120,
				3.26: 130,
				3.33: 140,
				3.39: 150,
				3.44: 160,
				3.50: 170,
				3.55: 180,
				3.64: 200,
				3.72: 220,
				3.80: 240
			},
			"DT Competition 1.8/1.6": {
				0.18: 30,
				0.47: 40,
				0.70: 50,
				0.80: 55,
				0.89: 60,
				0.97: 65,
				1.05: 70,
				1.12: 75,
				1.18: 80,
				1.25: 85,
				1.30: 90,
				1.35: 95,
				1.41: 100,
				1.46: 105,
				1.51: 110,
				1.56: 115,
				1.60: 120,
				1.68: 130,
				1.76: 140,
				1.83: 150,
				1.90: 160,
				1.96: 170,
				2.02: 180
			},
			"DT Competition 2.0/1.8 coated": {
				0.65: 30,
				0.94: 40,
				1.16: 50,
				1.26: 55,
				1.35: 60,
				1.43: 65,
				1.50: 70,
				1.57: 75,
				1.64: 80,
				1.70: 85,
				1.76: 90,
				1.81: 95,
				1.86: 100,
				1.91: 105,
				1.96: 110,
				2.00: 115,
				2.05: 120,
				2.13: 130,
				2.20: 140,
				2.27: 150,
				2.34: 160,
				2.40: 170,
				2.45: 180
			},
			"DT Competition race 2.0/1.6": {
				0.72: 50,
				0.82: 55,
				0.90: 60,
				0.98: 65,
				1.06: 70,
				1.13: 75,
				1.19: 80,
				1.26: 85,
				1.31: 90,
				1.37: 95,
				1.42: 100,
				1.47: 105,
				1.52: 110,
				1.56: 115,
				1.61: 120,
				1.69: 130,
				1.76: 140,
				1.83: 150,
				1.90: 160,
				1.96: 170,
				2.01: 180,
				2.12: 200,
				2.22: 220,
				2.31: 240
			},
			"DT Super Comp 1.8/1.7/2.0": {
				0.25: 30,
				0.55: 40,
				0.78: 50,
				0.87: 55,
				0.96: 60,
				1.04: 65,
				1.12: 70,
				1.19: 75,
				1.26: 80,
				1.32: 85,
				1.38: 90,
				1.43: 95,
				1.48: 100,
				1.53: 105,
				1.58: 110,
				1.63: 115,
				1.67: 120,
				1.75: 130,
				1.83: 140,
				1.90: 150,
				1.97: 160,
				2.03: 170,
				2.09: 180
			},
			"DT Revolution 1.8/1.5": {
				0.25: 40,
				0.48: 50,
				0.57: 55,
				0.66: 60,
				0.75: 65,
				0.82: 70,
				0.89: 75,
				0.96: 80,
				1.02: 85,
				1.08: 90,
				1.14: 95,
				1.19: 100,
				1.24: 105,
				1.29: 110,
				1.33: 115,
				1.38: 120,
				1.46: 130,
				1.54: 140,
				1.61: 150,
				1.67: 160,
				1.74: 170,
				1.79: 180
			},
			"DT Revolution 2.0/1.5": {
				0.24: 40,
				0.48: 50,
				0.58: 55,
				0.67: 60,
				0.76: 65,
				0.84: 70,
				0.91: 75,
				0.98: 80,
				1.04: 85,
				1.10: 90,
				1.16: 95,
				1.21: 100,
				1.27: 105,
				1.31: 110,
				1.36: 115,
				1.41: 120,
				1.49: 130,
				1.57: 140,
				1.64: 150,
				1.71: 160,
				1.78: 170,
				1.84: 180
			},
			"DT Alpine 2.0/2.34": {
				2.02: 30,
				2.27: 40,
				2.46: 50,
				2.54: 55,
				2.62: 60,
				2.69: 65,
				2.75: 70,
				2.81: 75,
				2.87: 80,
				2.92: 85,
				2.97: 90,
				3.01: 95,
				3.06: 100,
				3.10: 105,
				3.14: 110,
				3.18: 115,
				3.21: 120,
				3.28: 130,
				3.35: 140,
				3.41: 150,
				3.46: 160,
				3.51: 170,
				3.56: 180,
				3.65: 200,
				3.74: 220,
				3.81: 240
			},
			"DT Alpine III 2.34/1.8/2.0": {
				0.74: 30,
				1.01: 40,
				1.24: 50,
				1.34: 55,
				1.42: 60,
				1.50: 65,
				1.57: 70,
				1.64: 75,
				1.71: 80,
				1.77: 85,
				1.82: 90,
				1.87: 95,
				1.92: 100,
				1.97: 105,
				2.02: 110,
				2.06: 115,
				2.10: 120,
				2.18: 130,
				2.26: 140,
				2.32: 150,
				2.39: 160,
				2.45: 170,
				2.50: 180
			},		
			"DT New Aero 2.0/3.3x1.1": {
				0.14: 50,
				0.22: 55,
				0.29: 60,
				0.36: 65,
				0.42: 70,
				0.48: 75,
				0.54: 80,
				0.59: 85,
				0.64: 90,
				0.68: 95,
				0.72: 100,
				0.77: 105,
				0.80: 110,
				0.84: 115,
				0.88: 120,
				0.95: 130,
				1.01: 140,
				1.07: 150,
				1.12: 160,
				1.17: 170,
				1.22: 180,
				1.31: 200,
				1.39: 220,
				1.46: 240
			},
			"DT Aero Speed 1.8/2.3x1.2": {
				0.10: 40,
				0.32: 50,
				0.41: 55,
				0.49: 60,
				0.57: 65,
				0.64: 70,
				0.70: 75,
				0.77: 80,
				0.82: 85,
				0.88: 90,
				0.93: 95,
				0.98: 100,
				1.03: 105,
				1.07: 110,
				1.11: 115,
				1.15: 120,
				1.23: 130,
				1.30: 140,
				1.37: 150,
				1.43: 160,
				1.49: 170,
				1.54: 180
			},
			"DT Aerolite 2.0/0.9x2.3": {
				0.02: 70,
				0.09: 75,
				0.15: 80,
				0.20: 85,
				0.26: 90,
				0.31: 95,
				0.35: 100,
				0.40: 105,
				0.44: 110,
				0.48: 115,
				0.52: 120,
				0.59: 130,
				0.66: 140,
				0.73: 150,
				0.79: 160,
				0.84: 170,
				0.89: 180,
				0.99: 200,
				1.08: 220,
				1.16: 240
			},
			"DT Aerolite coated 2.0/2.3x0.9": {
				0.08: 70,
				0.15: 75,
				0.21: 80,
				0.26: 85,
				0.32: 90,
				0.37: 95,
				0.41: 100,
				0.46: 105,
				0.50: 110,
				0.54: 115,
				0.58: 120,
				0.66: 130,
				0.73: 140,
				0.79: 150,
				0.85: 160,
				0.91: 170,
				0.96: 180,
				1.06: 200,
				1.15: 220,
				1.23: 240
			},
			"DT Aero Comp 2.0/2.3x1.2": {
				0.26: 50,
				0.35: 55,
				0.43: 60,
				0.51: 65,
				0.58: 70,
				0.64: 75,
				0.70: 80,
				0.76: 85,
				0.81: 90,
				0.87: 95,
				0.91: 100,
				1.96: 105,
				1.00: 110,
				1.05: 115,
				1.09: 120,
				1.16: 130,
				1.23: 140,
				1.30: 150,
				1.36: 160,
				1.42: 170,
				1.47: 180,
				1.57: 200,
				1.66: 220,
				1.74: 240
			},
			"DT Aero Comp Coated 2.0/2.3x1.2": {
				0.33: 50,
				0.42: 55,
				0.50: 60,
				0.58: 65,
				0.65: 70,
				0.71: 75,
				0.77: 80,
				0.83: 85,
				0.88: 90,
				0.94: 95,
				0.98: 100,
				1.03: 105,
				1.07: 110,
				1.12: 115,
				1.16: 120,
				1.23: 130,
				1.30: 140,
				1.37: 150,
				1.43: 160,
				1.49: 170,
				1.54: 180,
				1.64: 200,
				1.73: 220,
				1.81: 240
			}
		}
	};

	function interpolate(values, index) {
		if (index in values)
			return values[index];
		if (values.length == 1)
			return values[0];

		var sortedKeys = Object.keys(values).sort((a, b) => a - b);
		var nKeys = sortedKeys.length;

		var min = sortedKeys[0];
		var max = sortedKeys[nKeys - 1];
		var secondMin = sortedKeys[1];
		var secondMax = sortedKeys[nKeys - 2];

		/* Extrapolate: */
		if (index < min)
			return values[min] - (values[secondMin] - values[min]) * (min - index) / (secondMin - min);
		if (index > max)
			return values[max] + (values[max] - values[secondMax]) * (index - max) / (max - secondMax);

		/* Interpolate: */
		/* x1 and x2 are the lower and higher neighbors of x in 'values' */
		var x1 = min;
		var x2 = max;
		if (x1 === x2)
			return x1;

		for (v in values) {
			if (v < index && v > x1)
				x1 = v;
			else if (v > index && v < x2)
				x2 = v;
		}
		var y1 = parseFloat(values[x1]);
		var y2 = parseFloat(values[x2]);
		return y1 + (index - x1) * (y2 - y1) / (x2 - x1);
	}


	/* Interface: */
	return {
		tension: function(spokeThickness, reading) {
			var lookupTable = tensionTable[tensometer][spokeThickness];
			return interpolate(lookupTable, reading);
		},

		getKnownSpokeThickness: function() {
			return Object.keys(tensionTable[tensometer]).sort();
		},

		getTensometers: function() {
			return Object.keys(tensionTable).sort();
		},

		setTensometer: function(t) {
			tensometer = t;
		},

		defaultTensometer: DEFAULT_TENSOMETER
	};
})();
