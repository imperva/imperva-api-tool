var dbPortMapping = {
	"Oracle":[1521,1526], 
	"MsSql":[1433,1434], 
	"Sybase":[6262], 
	"Db2":[], 
	"Informix":[], 
	"Teradata":[1025], 
	"SybaseIQ":[], 
	"MySql":[3306], 
	"Netezza":[], 
	"Progress":[], 
	"Cache":[]
}

var SSPolicyTypeDisplayMapping = {
	"webServiceCustomPolicies":'Web Service Custom',
	"webApplicationCustomPolicies":'Web Application Custom'
}

// Use jsonParamMapping to override or hardcode param values/objects in the event they are not parsed from the WADL/XSD correctly
// obj, array (any structure of nested objects), list (hard-coded set of values displayed in dropdown), string, boolean, int
var SSapiParamMapping = {
	"agentName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/agents",
				"nestedItemName":"name",
				"nestedItemLevel":1
			}
		}
	},
	"aliasName":{
		"name":"aliasName",
		"type":"list",
		"values":["","AWS Default","KRP_12.58"],
		"getAPIurlMapping":{}
	},
	"applicationGroupName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/applicationGroups",
				"nestedItemName":"name",
				"nestedItemLevel":1
			}
			//"default":"/v1/conf/applicationGroups/{applicationGroupName}"
		}
	},
	"applicationName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/dbApplications/{siteName}/{serverGroupName}/{dbServiceName}"
			}
		}
	},
	"apply-level":{
		"name":"apply-level",
		"type":"list",
		"values":["dbServiceLevel","dbAppLevel"],
		"getAPIurlMapping":{}
	},
	"dataInterfaceID":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/agents/{agentName}/dataInterfaces",
				"nestedItemName":"id",
				"nestedItemLevel":1
			}
		}
	},
	"dataSetName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/dataSets",
				// "nestedItemName":"name",
				"nestedItemLevel":0
			}
		}
	},
	"db-mappings":{
		"name":"db-mappings",
		"type":"array",
		"values":[{"database":"finance","schema":"payroll","application":"financeApp"},{"database":"HR","schema":"","application":"HRApp"}],
		"getAPIurlMapping":{}
	},
	"db-service-type":{
		"name":"db-service-type",
		"type":"list",
		"values":["Oracle","MsSql","Sybase","Db2","Informix","Teradata","SybaseIQ","MySql","Netezza","Progress","Cache"],
		"getAPIurlMapping":{}	
	},
	"dbApplicationName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/dbApplications/{siteName}/{serverGroupName}/{dbServiceName}"
			}
		}
	},
	"encrypt":{
		"name":"encrypt",
		"type":"boolean",
		"values":false,
		"getAPIurlMapping":{}
	},
	"end-date":{
		"name":"end-date",
		"type":"string",
		"values":"2014-01-01 08:00",
		"getAPIurlMapping":{}
	},
	"dbServiceName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/dbServices/{siteName}/{serverGroupName}"
			}
		}
	},
	"fullDepth":{
		"name":"fullDepth",
		"type":"boolean",
		"values":false,
		"getAPIurlMapping":{}
	},
	"gatewayGroup":{
		"name":"gatewayGroup",
		"type":"string",
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/gatewayGroups"
			}
		}
	},
	"gatewayGroupName":{
		"name":"gatewayGroupName",
		"type":"string",
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/gatewayGroups"
			}
		}
	},
	"gatewayPorts":{
		"name":"gatewayPorts",
		"type":"string",
		"values":"80",
		"getAPIurlMapping":{}
	},
	/*"gatewayName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/gatewayGroups/{gatewayGroupName}/gateways"
			}
		}
	},*/
	"hostMatchType":{
		"name":"hostMatchType",
		"type":"list",
		"values":["Prefix","Suffix","Exact"],
		"getAPIurlMapping":{}
	},
	"IPAddress":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/serverGroups/{siteName}/{serverGroupName}/protectedIPs",
				"nestedItemName":"ip",
				"nestedItemLevel":1
			}
		}
	},
	"items-to-export":{
		"name":"items-to-export",
		"type":"array",
		"values":[
			{
				"type":"action-set",
				"names":["action-set Name"]
			},{
				"type":"agent-monitoring-rule",
				"names":["agent-monitoring-rule Name"]
			},{
				"type":"db-audit-policy",
				"names":["Default Rule - All Events","Database connections"]
			},{
				"type":"db-command-group",
				"names":["db-command-group name"]
			},{
				"type":"db-table-group",
				"names":["db-table-group"]
			},{
				"type":"db-enrichment-policy",
				"names":["db-enrichment-policy"]
			},{
				"type":"lookup-data-set",
				"names":["lookup-data-set"]
			},{
				"type":"db-privileged-operation-group",
				"names":["db-privileged-operation-group"]
			}
		],
		"getAPIurlMapping":{}
	},
	"JobId":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/management/jobs"
			}
		}
	},
	"learnSettings":{
		"name":"learnSettings",
		"type":"list",
		"values":["LearnAll","LearnAllExceptStatics","LearnUrlsWithParams"],
		"getAPIurlMapping":{}
	},
	"mode":{
		"name":"mode",
		"type":"list",
		"values":["Lax","Strict"],
		"getAPIurlMapping":{}
	},
	"operationMode":{
		"name":"operationMode",
		"type":"list",
		"values":["active","simulation","disabled"],
		"getAPIurlMapping":{}
	},
	"outboundRules":{
		"name":"outboundRules",
		"type":"array",
		"values":{
			"1": {
				"externalHost":"Any",
				"internalIpHost":"www.imperva.com",
				"serverPort":80,
				"encrypt":false
			}
		},
		"getAPIurlMapping":{}
	},
	/*"paramName":{
		"getAPIurlMapping":{
			"default":{}
		}
	},*/
	/*"parentApplicationGroupName":{
		"getAPIurlMapping":{
			"default":{}
		}
	},*/
	"paramName":{
		"name":"paramName",
		"type":"list",
		"values":["default-application-group","server-group-auto-creation","service-auto-creation"],
		"getAPIurlMapping":{}
	},
	"policyName":{
		"getAPIurlMapping":{
			"/v1/conf/policies/security/firewallPolicies/{policyName}":{
				"url":"/v1/conf/policies/security/firewallPolicies/",
				"nestedItemName":"policies",
				"nestedItemLevel":0
			},
			"/v1/conf/policies/security/httpProtocolSignaturesPolicies/{policyName}":{
				"url":"/v1/conf/policies/security/httpProtocolSignaturesPolicies/",
				"nestedItemName":"policies",
				"nestedItemLevel":0
			},
			"/v1/conf/policies/security/streamSignaturesPolicies/{policyName}":{
				"url":"/v1/conf/policies/security/streamSignaturesPolicies/",
				"nestedItemName":"policies",
				"nestedItemLevel":0
			},
			"/v1/conf/policies/security/webApplicationCustomPolicies{policyName}":{
				"url":"/v1/conf/policies/security/webApplicationCustomPolicies",
				"nestedItemName":"customWebPolicies",
				"nestedItemLevel":0
			},
			"/v1/conf/policies/security/webApplicationSignaturesPolicies/{policyName}":{
				"url":"/v1/conf/policies/security/webApplicationSignaturesPolicies/",
				"nestedItemName":"policies",
				"nestedItemLevel":0
			},			
			"/v1/conf/policies/security/webServiceCustomPolicies/{policyName}":{
				"url":"/v1/conf/policies/security/webServiceCustomPolicies",
				"nestedItemName":"customWebPolicies",
				"nestedItemLevel":0
			},
			"/v1/conf/auditPolicies/{policyName}":{
				"url":"/v1/conf/auditPolicies"
			}
		}
	},
	"priority":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/webServices/{siteName}/{serverGroupName}/{webServiceName}/hostToAppMappings",
				"nestedItemName":"priority",
				"nestedItemLevel":1
			}
			//"priority_hostToAppMappings":{"default":"/v1/conf/webServices/{siteName}/{serverGroupName}/{webServiceName}/hostToAppMappings/{webApplicationName}/{priority}"},
			//"priority_krpOutboundRules":{"default":"/v1/conf/webServices/{siteName}/{serverGroupName}/{webServiceName}/krpInboundRules/{gatewayGroupName}/{aliasName}/{gatewayPort}/krpOutboundRules/{priority}"},
		}
	},
	"ports":{
		"name":"ports",
		"type":"array",
		"values":[80],
		"getAPIurlMapping":{}
	},
	"sslPorts":{
		"name":"sslPorts",
		"type":"array",
		"values":[443],
		"getAPIurlMapping":{}
	},
	"records":{
		"name":"records",
		"type":"array",
		"values:":[
			{
				"Key":"351",
				"User":"Jack Norton",
				"Groups":["R&D","Finance","Supervisors"]
			},{
				"Key":"572",
				"User":"John Doe",
				"Groups":"Admin"
			}
		],
		"getAPIurlMapping":{}
	},
	"run-ids":{
		"name":"run-ids",
		"type":"array",
		"values":["8335168629773080553","8335168629773080889"],
		"getAPIurlMapping":{}
	},
	/*"records":{
		"name":"records",
		"type":"array",
		"values":[
			{"Name":"table1","Type":"Table","Columns":["col1","col2"]},
			{"Name":"table2","Type":"View"},
			{"Name":"table3","Type":"Synonym","Columns":"col1"}
		],
		"getAPIurlMapping":{

		}
	},*/
	"serverGroupName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/serverGroups/{siteName}"
			}
		}
	},
	"serverPort":{
		"name":"serverPort",
		"type":"int",
		"values":80,
		"getAPIurlMapping":{}
	},
	"serviceName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/dbServices/{siteName}/{serverGroupName}"
			}
		}
	},
	"siteName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/sites"
			}
		}
	},
	"scans":{
		"name":"scans",
		"type":"list",
		"values":["scan1","scanName2"],
		"getAPIurlMapping":{}
	},
	"should-fail-on-unsupported-dependency":{
		"name":"should-fail-on-unsupported-dependency",
		"type":"boolean",
		"values":false,
		"getAPIurlMapping":{}
	},
	"start-date":{
		"name":"start-date",
		"type":"string",
		"values":"2014-01-01 08:00",
		"getAPIurlMapping":{}
	},
	"text-replacement":{
		"name":"text-replacement",
		"type":"array",
		"values":[{"location":"NormalizedQuery","pattern":"somePatterntToReplace","replacement":"TeReplacementString","advanced":false}],
		"getAPIurlMapping":{}
	},
	"tableGroupName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/tableGroups",
				"nestedItemName":"displayName",
				"nestedItemLevel":0
			}
		}
	},
	"tagName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/tags"
			}
		}
	},
	"tags":{
		"name":"tags",
		"type":"array",
		"values":["OracleAgents","SqlServerAgents"],
		"getAPIurlMapping":{}
	},
	"webServiceName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/webServices/{siteName}/{serverGroupName}"
			}
		}
	},
	"webApplicationName":{
		"getAPIurlMapping":{
			"default":{
				"url":"/v1/conf/webApplications/{siteName}/{serverGroupName}/{webServiceName}"
			}
		}
	}
};

var SS2IncapPolicyMappings = {
	"action":{
		"block":"RULE_ACTION_BLOCK",
		"none":"RULE_ACTION_ALERT"
	},
	"operation":{
		"atLeastOne":"==",
		"doesNotInclude":"not-contains",
		"doNotMatchRegExp":"not-contains",
		"doesNotMatchRegExp":"not-contains",
		"excludeAll":"!=",
		"include":"contains",
		"includes":"contains",
		"matchRegExp":"contains"/*,
		"originatingSession":"",
		"match":{"prefix":"","exact":""}*/
	}	
}

var predicateWhiteList = {
	"httpRequest":{"lookup":false},
	"httpRequestAcceptLanguage":{"lookup":false},
	"httpRequestContentType":{"lookup":false},
	"httpRequestCookieName":{"lookup":false},
	"httpRequestFileExtension":{"lookup":false},
	"httpRequestHeaderName":{"lookup":false},
	"httpRequestHeaderValue":{"lookup":false},
	"httpRequestHostName":{"lookup":false},
	"httpRequestMethod":{"lookup":false},
	"httpRequestParameterName":{"lookup":false},
	"httpRequestRefererUrl":{"lookup":false},
	"httpRequestUrl":{"lookup":false},
	"httpRequestUserAgent":{"lookup":false},
	"numberOfOccurrences":{"lookup":false},
	"sourceGeolocation":{"lookup":false},
	"sourceIpAddresses":{"lookup":true,"url":"/v1/conf/ipGroups/","attr":"ipGroups"},
	"lookupDatasetSearch":{"lookup":true,"url":"/v1/conf/dataSets/"}/*,
	"datasetAttributeLookup":{"lookup":true,"url":"/v1/conf/dataSets/"}*/
};
