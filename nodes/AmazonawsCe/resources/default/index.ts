import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Create Anomaly Monitor",
					"value": "Create Anomaly Monitor",
					"action": "Create Anomaly Monitor",
					"description": "Creates a new cost anomaly detection monitor with the requested type and monitor specification. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor"
						}
					}
				},
				{
					"name": "Create Anomaly Subscription",
					"value": "Create Anomaly Subscription",
					"action": "Create Anomaly Subscription",
					"description": "Adds an alert subscription to a cost anomaly detection monitor. You can use each subscription to define subscribers with email or SNS notifications. Email subscribers can set an absolute or percentage threshold and a time frequency for receiving notifications. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription"
						}
					}
				},
				{
					"name": "Create Cost Category Definition",
					"value": "Create Cost Category Definition",
					"action": "Create Cost Category Definition",
					"description": "Creates a new Cost Category with the requested name and rules.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition"
						}
					}
				},
				{
					"name": "Delete Anomaly Monitor",
					"value": "Delete Anomaly Monitor",
					"action": "Delete Anomaly Monitor",
					"description": "Deletes a cost anomaly monitor. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor"
						}
					}
				},
				{
					"name": "Delete Anomaly Subscription",
					"value": "Delete Anomaly Subscription",
					"action": "Delete Anomaly Subscription",
					"description": "Deletes a cost anomaly subscription. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription"
						}
					}
				},
				{
					"name": "Delete Cost Category Definition",
					"value": "Delete Cost Category Definition",
					"action": "Delete Cost Category Definition",
					"description": "Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition"
						}
					}
				},
				{
					"name": "Describe Cost Category Definition",
					"value": "Describe Cost Category Definition",
					"action": "Describe Cost Category Definition",
					"description": "<p>Returns the name, Amazon Resource Name (ARN), rules, definition, and effective dates of a Cost Category that's defined in the account.</p> <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that's active on a specific date. If there's no <code>EffectiveOn</code> specified, you see a Cost Category that's effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition"
						}
					}
				},
				{
					"name": "Get Anomalies",
					"value": "Get Anomalies",
					"action": "Get Anomalies",
					"description": "Retrieves all of the cost anomalies detected on your account during the time period that's specified by the <code>DateInterval</code> object. Anomalies are available for up to 90 days.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetAnomalies"
						}
					}
				},
				{
					"name": "Get Anomaly Monitors",
					"value": "Get Anomaly Monitors",
					"action": "Get Anomaly Monitors",
					"description": "Retrieves the cost anomaly monitor definitions for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors"
						}
					}
				},
				{
					"name": "Get Anomaly Subscriptions",
					"value": "Get Anomaly Subscriptions",
					"action": "Get Anomaly Subscriptions",
					"description": "Retrieves the cost anomaly subscription objects for your account. You can filter using a list of cost anomaly monitor Amazon Resource Names (ARNs). ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions"
						}
					}
				},
				{
					"name": "Get Cost And Usage",
					"value": "Get Cost And Usage",
					"action": "Get Cost And Usage",
					"description": "<p>Retrieves cost and usage metrics for your account. You can specify which cost and usage-related metric that you want the request to return. For example, you can specify <code>BlendedCosts</code> or <code>UsageQuantity</code>. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html\">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts.</p> <p>For information about filter limitations, see <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/billing-limits.html\">Quotas and restrictions</a> in the <i>Billing and Cost Management User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage"
						}
					}
				},
				{
					"name": "Get Cost And Usage With Resources",
					"value": "Get Cost And Usage With Resources",
					"action": "Get Cost And Usage With Resources",
					"description": "<p>Retrieves cost and usage metrics with resources for your account. You can specify which cost and usage-related metric, such as <code>BlendedCosts</code> or <code>UsageQuantity</code>, that you want the request to return. You can also filter and group your data by various dimensions, such as <code>SERVICE</code> or <code>AZ</code>, in a specific time range. For a complete list of valid dimensions, see the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_GetDimensionValues.html\">GetDimensionValues</a> operation. Management account in an organization in Organizations have access to all member accounts. This API is currently available for the Amazon Elastic Compute Cloud – Compute service only.</p> <note> <p>This is an opt-in only feature. You can enable this feature from the Cost Explorer Settings page. For information about how to access the Settings page, see <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-access.html\">Controlling Access for Cost Explorer</a> in the <i>Billing and Cost Management User Guide</i>.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources"
						}
					}
				},
				{
					"name": "Get Cost Categories",
					"value": "Get Cost Categories",
					"action": "Get Cost Categories",
					"description": "<p>Retrieves an array of Cost Category names and values incurred cost.</p> <note> <p>If some Cost Category names and values are not associated with any cost, they will not be returned by this API.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetCostCategories"
						}
					}
				},
				{
					"name": "Get Cost Forecast",
					"value": "Get Cost Forecast",
					"action": "Get Cost Forecast",
					"description": "Retrieves a forecast for how much Amazon Web Services predicts that you will spend over the forecast time period that you select, based on your past costs. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetCostForecast"
						}
					}
				},
				{
					"name": "Get Dimension Values",
					"value": "Get Dimension Values",
					"action": "Get Dimension Values",
					"description": "Retrieves all available filter values for a specified filter over a period of time. You can search the dimension values for an arbitrary string. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues"
						}
					}
				},
				{
					"name": "Get Reservation Coverage",
					"value": "Get Reservation Coverage",
					"action": "Get Reservation Coverage",
					"description": "<p>Retrieves the reservation coverage for your account, which you can use to see how much of your Amazon Elastic Compute Cloud, Amazon ElastiCache, Amazon Relational Database Service, or Amazon Redshift usage is covered by a reservation. An organization's management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data about reservation usage by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation. </p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage"
						}
					}
				},
				{
					"name": "Get Reservation Purchase Recommendation",
					"value": "Get Reservation Purchase Recommendation",
					"action": "Get Reservation Purchase Recommendation",
					"description": "<p>Gets recommendations for reservation purchases. These recommendations might help you to reduce your costs. Reservations provide a discounted hourly rate (up to 75%) compared to On-Demand pricing.</p> <p>Amazon Web Services generates your recommendations by identifying your On-Demand usage during a specific time period and collecting your usage into categories that are eligible for a reservation. After Amazon Web Services has these categories, it simulates every combination of reservations in each category of usage to identify the best number of each type of Reserved Instance (RI) to purchase to maximize your estimated savings. </p> <p>For example, Amazon Web Services automatically aggregates your Amazon EC2 Linux, shared tenancy, and c4 family usage in the US West (Oregon) Region and recommends that you buy size-flexible regional reservations to apply to the c4 family usage. Amazon Web Services recommends the smallest size instance in an instance family. This makes it easier to purchase a size-flexible Reserved Instance (RI). Amazon Web Services also shows the equal number of normalized units. This way, you can purchase any instance size that you want. For this example, your RI recommendation is for <code>c4.large</code> because that is the smallest size instance in the c4 instance family.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation"
						}
					}
				},
				{
					"name": "Get Reservation Utilization",
					"value": "Get Reservation Utilization",
					"action": "Get Reservation Utilization",
					"description": "Retrieves the reservation utilization for your account. Management account in an organization have access to member accounts. You can filter data by dimensions in a time period. You can use <code>GetDimensionValues</code> to determine the possible dimension values. Currently, you can group only by <code>SUBSCRIPTION_ID</code>. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization"
						}
					}
				},
				{
					"name": "Get Rightsizing Recommendation",
					"value": "Get Rightsizing Recommendation",
					"action": "Get Rightsizing Recommendation",
					"description": "<p>Creates recommendations that help you save cost by identifying idle and underutilized Amazon EC2 instances.</p> <p>Recommendations are generated to either downsize or terminate instances, along with providing savings detail and metrics. For more information about calculation and function, see <a href=\"https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-rightsizing.html\">Optimizing Your Cost with Rightsizing Recommendations</a> in the <i>Billing and Cost Management User Guide</i>.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation"
						}
					}
				},
				{
					"name": "Get Savings Plans Coverage",
					"value": "Get Savings Plans Coverage",
					"action": "Get Savings Plans Coverage",
					"description": "<p>Retrieves the Savings Plans covered for your account. This enables you to see how much of your cost is covered by a Savings Plan. An organization’s management account can see the coverage of the associated member accounts. This supports dimensions, Cost Categories, and nested expressions. For any time period, you can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p>To determine valid values for a dimension, use the <code>GetDimensionValues</code> operation.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage"
						}
					}
				},
				{
					"name": "Get Savings Plans Purchase Recommendation",
					"value": "Get Savings Plans Purchase Recommendation",
					"action": "Get Savings Plans Purchase Recommendation",
					"description": "Retrieves the Savings Plans recommendations for your account. First use <code>StartSavingsPlansPurchaseRecommendationGeneration</code> to generate a new set of recommendations, and then use <code>GetSavingsPlansPurchaseRecommendation</code> to retrieve them.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation"
						}
					}
				},
				{
					"name": "Get Savings Plans Utilization",
					"value": "Get Savings Plans Utilization",
					"action": "Get Savings Plans Utilization",
					"description": "<p>Retrieves the Savings Plans utilization for your account across date ranges with daily or monthly granularity. Management account in an organization have access to member accounts. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p>You can't group by any dimension values for <code>GetSavingsPlansUtilization</code>.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization"
						}
					}
				},
				{
					"name": "Get Savings Plans Utilization Details",
					"value": "Get Savings Plans Utilization Details",
					"action": "Get Savings Plans Utilization Details",
					"description": "<p>Retrieves attribute data along with aggregate utilization and savings data for a given time period. This doesn't support granular or grouped data (daily/monthly) in response. You can't retrieve data by dates in a single response similar to <code>GetSavingsPlanUtilization</code>, but you have the option to make multiple calls to <code>GetSavingsPlanUtilizationDetails</code> by providing individual dates. You can use <code>GetDimensionValues</code> in <code>SAVINGS_PLANS</code> to determine the possible dimension values.</p> <note> <p> <code>GetSavingsPlanUtilizationDetails</code> internally groups data by <code>SavingsPlansArn</code>.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails"
						}
					}
				},
				{
					"name": "Get Tags",
					"value": "Get Tags",
					"action": "Get Tags",
					"description": "Queries for available tag keys and tag values for a specified period. You can search the tag values for an arbitrary string. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetTags"
						}
					}
				},
				{
					"name": "Get Usage Forecast",
					"value": "Get Usage Forecast",
					"action": "Get Usage Forecast",
					"description": "Retrieves a forecast for how much Amazon Web Services predicts that you will use over the forecast time period that you select, based on your past usage. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast"
						}
					}
				},
				{
					"name": "List Cost Allocation Tags",
					"value": "List Cost Allocation Tags",
					"action": "List Cost Allocation Tags",
					"description": "Get a list of cost allocation tags. All inputs in the API are optional and serve as filters. By default, all cost allocation tags are returned. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags"
						}
					}
				},
				{
					"name": "List Cost Category Definitions",
					"value": "List Cost Category Definitions",
					"action": "List Cost Category Definitions",
					"description": "Returns the name, Amazon Resource Name (ARN), <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions"
						}
					}
				},
				{
					"name": "List Savings Plans Purchase Recommendation Generation",
					"value": "List Savings Plans Purchase Recommendation Generation",
					"action": "List Savings Plans Purchase Recommendation Generation",
					"description": "Retrieves a list of your historical recommendation generations within the past 30 days.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration"
						}
					}
				},
				{
					"name": "List Tags For Resource",
					"value": "List Tags For Resource",
					"action": "List Tags For Resource",
					"description": "Returns a list of resource tags associated with the resource specified by the Amazon Resource Name (ARN). ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource"
						}
					}
				},
				{
					"name": "Provide Anomaly Feedback",
					"value": "Provide Anomaly Feedback",
					"action": "Provide Anomaly Feedback",
					"description": "Modifies the feedback property of a given cost anomaly. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback"
						}
					}
				},
				{
					"name": "Start Savings Plans Purchase Recommendation Generation",
					"value": "Start Savings Plans Purchase Recommendation Generation",
					"action": "Start Savings Plans Purchase Recommendation Generation",
					"description": "<p>Requests a Savings Plans recommendation generation. This enables you to calculate a fresh set of Savings Plans recommendations that takes your latest usage data and current Savings Plans inventory into account. You can refresh Savings Plans recommendations up to three times daily for a consolidated billing family.</p> <note> <p> <code>StartSavingsPlansPurchaseRecommendationGeneration</code> has no request syntax because no input parameters are needed to support this operation.</p> </note>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration"
						}
					}
				},
				{
					"name": "Tag Resource",
					"value": "Tag Resource",
					"action": "Tag Resource",
					"description": "<p>An API operation for adding one or more tags (key-value pairs) to a resource.</p> <p>You can use the <code>TagResource</code> operation with a resource that already has tags. If you specify a new tag key for the resource, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value you specify replaces the previous value for that tag.</p> <p>Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use.</p>",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.TagResource"
						}
					}
				},
				{
					"name": "Untag Resource",
					"value": "Untag Resource",
					"action": "Untag Resource",
					"description": "Removes one or more tags from a resource. Specify only tag keys in your request. Don't specify the value. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.UntagResource"
						}
					}
				},
				{
					"name": "Update Anomaly Monitor",
					"value": "Update Anomaly Monitor",
					"action": "Update Anomaly Monitor",
					"description": "Updates an existing cost anomaly monitor. The changes made are applied going forward, and doesn't change anomalies detected in the past. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor"
						}
					}
				},
				{
					"name": "Update Anomaly Subscription",
					"value": "Update Anomaly Subscription",
					"action": "Update Anomaly Subscription",
					"description": "Updates an existing cost anomaly monitor subscription. ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription"
						}
					}
				},
				{
					"name": "Update Cost Allocation Tags Status",
					"value": "Update Cost Allocation Tags Status",
					"action": "Update Cost Allocation Tags Status",
					"description": "Updates status for cost allocation tags in bulk, with maximum batch size of 20. If the tag status that's updated is the same as the existing tag status, the request doesn't fail. Instead, it doesn't have any effect on the tag status (for example, activating the active tag). ",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus"
						}
					}
				},
				{
					"name": "Update Cost Category Definition",
					"value": "Update Cost Category Definition",
					"action": "Update Cost Category Definition",
					"description": "Updates an existing Cost Category. Changes made to the Cost Category rules will be used to categorize the current month’s expenses and future expenses. This won’t change categorization for the previous months.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.CreateAnomalyMonitor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.CreateAnomalyMonitor",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Create Anomaly Monitor",
					"value": "AWSInsightsIndexService.CreateAnomalyMonitor"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Monitor"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Anomaly Monitor",
			"name": "AnomalyMonitor",
			"type": "json",
			"default": "{\n  \"MonitorName\": {},\n  \"CreationDate\": {},\n  \"LastUpdatedDate\": {},\n  \"LastEvaluatedDate\": {},\n  \"MonitorType\": {},\n  \"MonitorDimension\": {},\n  \"MonitorSpecification\": {\n    \"Or\": {},\n    \"And\": {},\n    \"Not\": {},\n    \"Dimensions\": {},\n    \"Tags\": {},\n    \"CostCategories\": {}\n  },\n  \"DimensionalValueCount\": {}\n}",
			"description": "The cost anomaly detection monitor object that you want to create.",
			"routing": {
				"send": {
					"property": "AnomalyMonitor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "Resource Tags",
			"name": "ResourceTags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "<p>An optional list of tags to associate with the specified <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalyMonitor.html\"> <code>AnomalyMonitor</code> </a>. You can use resource tags to control access to your <code>monitor</code> using IAM policies.</p> <p>Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:</p> <ul> <li> <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use</p> </li> <li> <p>The maximum length of a key is 128 characters</p> </li> <li> <p>The maximum length of a value is 256 characters</p> </li> <li> <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code> </p> </li> <li> <p>Keys and values are case sensitive</p> </li> <li> <p>Keys and values are trimmed for any leading or trailing whitespaces</p> </li> <li> <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services use</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.CreateAnomalySubscription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.CreateAnomalySubscription",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Create Anomaly Subscription",
					"value": "AWSInsightsIndexService.CreateAnomalySubscription"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Subscription"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Anomaly Subscription",
			"name": "AnomalySubscription",
			"type": "json",
			"default": "{\n  \"AccountId\": {},\n  \"MonitorArnList\": {},\n  \"Subscribers\": {},\n  \"Threshold\": {},\n  \"Frequency\": {},\n  \"SubscriptionName\": {},\n  \"ThresholdExpression\": {}\n}",
			"description": "The cost anomaly subscription object that you want to create. ",
			"routing": {
				"send": {
					"property": "AnomalySubscription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Resource Tags",
			"name": "ResourceTags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "<p>An optional list of tags to associate with the specified <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_AnomalySubscription.html\"> <code>AnomalySubscription</code> </a>. You can use resource tags to control access to your <code>subscription</code> using IAM policies.</p> <p>Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:</p> <ul> <li> <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use</p> </li> <li> <p>The maximum length of a key is 128 characters</p> </li> <li> <p>The maximum length of a value is 256 characters</p> </li> <li> <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code> </p> </li> <li> <p>Keys and values are case sensitive</p> </li> <li> <p>Keys and values are trimmed for any leading or trailing whitespaces</p> </li> <li> <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services use</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.CreateCostCategoryDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.CreateCostCategoryDefinition",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Create Cost Category Definition",
					"value": "AWSInsightsIndexService.CreateCostCategoryDefinition"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "",
			"description": "The unique name of the Cost Category.",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Effective Start",
			"name": "EffectiveStart",
			"type": "string",
			"default": "",
			"description": "The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.",
			"routing": {
				"send": {
					"property": "EffectiveStart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rule Version",
			"name": "RuleVersion",
			"type": "options",
			"default": "CostCategoryExpression.v1",
			"description": "The rule schema version in this particular Cost Category.",
			"options": [
				{
					"name": "Cost Category Expression v1",
					"value": "CostCategoryExpression.v1"
				}
			],
			"routing": {
				"send": {
					"property": "RuleVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rules",
			"name": "Rules",
			"type": "json",
			"default": "[\n  {\n    \"Rule\": {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    },\n    \"InheritedValue\": {},\n    \"Type\": {}\n  }\n]",
			"description": "The Cost Category rules used to categorize costs. For more information, see <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html\">CostCategoryRule</a>.",
			"routing": {
				"send": {
					"property": "Rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Default Value",
			"name": "DefaultValue",
			"type": "string",
			"default": "",
			"description": "The default value for the cost category.",
			"routing": {
				"send": {
					"property": "DefaultValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Split Charge Rules",
			"name": "SplitChargeRules",
			"type": "json",
			"default": "[\n  {\n    \"Targets\": {},\n    \"Method\": {},\n    \"Parameters\": {}\n  }\n]",
			"description": " The split charge rules used to allocate your charges between your Cost Category values. ",
			"routing": {
				"send": {
					"property": "SplitChargeRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Resource Tags",
			"name": "ResourceTags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "<p>An optional list of tags to associate with the specified <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategory.html\"> <code>CostCategory</code> </a>. You can use resource tags to control access to your <code>cost category</code> using IAM policies.</p> <p>Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:</p> <ul> <li> <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use</p> </li> <li> <p>The maximum length of a key is 128 characters</p> </li> <li> <p>The maximum length of a value is 256 characters</p> </li> <li> <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code> </p> </li> <li> <p>Keys and values are case sensitive</p> </li> <li> <p>Keys and values are trimmed for any leading or trailing whitespaces</p> </li> <li> <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services use</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Create Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalyMonitor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.DeleteAnomalyMonitor",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Delete Anomaly Monitor",
					"value": "AWSInsightsIndexService.DeleteAnomalyMonitor"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Anomaly Monitor"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Monitor Arn",
			"name": "MonitorArn",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the cost anomaly monitor that you want to delete. ",
			"routing": {
				"send": {
					"property": "MonitorArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.DeleteAnomalySubscription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.DeleteAnomalySubscription",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Delete Anomaly Subscription",
					"value": "AWSInsightsIndexService.DeleteAnomalySubscription"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Anomaly Subscription"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscription Arn",
			"name": "SubscriptionArn",
			"type": "string",
			"default": "",
			"description": "The unique identifier of the cost anomaly subscription that you want to delete. ",
			"routing": {
				"send": {
					"property": "SubscriptionArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.DeleteCostCategoryDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.DeleteCostCategoryDefinition",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Delete Cost Category Definition",
					"value": "AWSInsightsIndexService.DeleteCostCategoryDefinition"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cost Category Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cost Category Arn",
			"name": "CostCategoryArn",
			"type": "string",
			"default": "",
			"description": "The unique identifier for your Cost Category. ",
			"routing": {
				"send": {
					"property": "CostCategoryArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Delete Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.DescribeCostCategoryDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.DescribeCostCategoryDefinition",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Describe Cost Category Definition",
					"value": "AWSInsightsIndexService.DescribeCostCategoryDefinition"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Cost Category Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cost Category Arn",
			"name": "CostCategoryArn",
			"type": "string",
			"default": "",
			"description": "The unique identifier for your Cost Category. ",
			"routing": {
				"send": {
					"property": "CostCategoryArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Effective On",
			"name": "EffectiveOn",
			"type": "string",
			"default": "",
			"description": "The date when the Cost Category was effective. ",
			"routing": {
				"send": {
					"property": "EffectiveOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Describe Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetAnomalies",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetAnomalies",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Anomalies",
					"value": "AWSInsightsIndexService.GetAnomalies"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"displayName": "Monitor Arn",
			"name": "MonitorArn",
			"type": "string",
			"default": "",
			"description": "Retrieves all of the cost anomalies detected for a specific cost anomaly monitor Amazon Resource Name (ARN). ",
			"routing": {
				"send": {
					"property": "MonitorArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Date Interval",
			"name": "DateInterval",
			"type": "json",
			"default": "{\n  \"EndDate\": {}\n}",
			"description": "Assigns the start and end dates for retrieving cost anomalies. The returned anomaly object will have an <code>AnomalyEndDate</code> in the specified time range. ",
			"routing": {
				"send": {
					"property": "DateInterval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"displayName": "Feedback",
			"name": "Feedback",
			"type": "options",
			"default": "YES",
			"description": "Filters anomaly results by the feedback field on the anomaly object. ",
			"options": [
				{
					"name": "YES",
					"value": "YES"
				},
				{
					"name": "NO",
					"value": "NO"
				},
				{
					"name": "PLANNED ACTIVITY",
					"value": "PLANNED_ACTIVITY"
				}
			],
			"routing": {
				"send": {
					"property": "Feedback",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"displayName": "Total Impact",
			"name": "TotalImpact",
			"type": "json",
			"default": "{\n  \"StartValue\": {},\n  \"EndValue\": {}\n}",
			"description": "Filters anomaly results by the total impact field on the anomaly object. For example, you can filter anomalies <code>GREATER_THAN 200.00</code> to retrieve anomalies, with an estimated dollar impact greater than 200. ",
			"routing": {
				"send": {
					"property": "TotalImpact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The number of entries a paginated response contains. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomalies"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetAnomalyMonitors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Monitors"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetAnomalyMonitors",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Anomaly Monitors",
					"value": "AWSInsightsIndexService.GetAnomalyMonitors"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Monitors"
					]
				}
			}
		},
		{
			"displayName": "Monitor Arn List",
			"name": "MonitorArnList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of cost anomaly monitor ARNs. ",
			"routing": {
				"send": {
					"property": "MonitorArnList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Monitors"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Monitors"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The number of entries that a paginated response contains. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Monitors"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Monitors"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetAnomalySubscriptions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetAnomalySubscriptions",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Anomaly Subscriptions",
					"value": "AWSInsightsIndexService.GetAnomalySubscriptions"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Subscription Arn List",
			"name": "SubscriptionArnList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of cost anomaly subscription ARNs. ",
			"routing": {
				"send": {
					"property": "SubscriptionArnList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Monitor Arn",
			"name": "MonitorArn",
			"type": "string",
			"default": "",
			"description": "Cost anomaly monitor ARNs. ",
			"routing": {
				"send": {
					"property": "MonitorArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The number of entries a paginated response contains. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Anomaly Subscriptions"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetCostAndUsage",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Cost And Usage",
					"value": "AWSInsightsIndexService.GetCostAndUsage"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "Sets the start date and end date for retrieving Amazon Web Services costs. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Granularity",
			"name": "Granularity",
			"type": "options",
			"default": "DAILY",
			"description": "Sets the Amazon Web Services cost granularity to <code>MONTHLY</code> or <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set, the response object doesn't include the <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>, or <code>HOURLY</code>. ",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"property": "Granularity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Filters Amazon Web Services costs by different dimensions. For example, you can specify <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated with that account's usage of that service. You can nest <code>Expression</code> objects to define any combination of dimension filters. For more information, see <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a>. </p> <p>Valid values for <code>MatchOptions</code> for <code>Dimensions</code> are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p> <p>Valid values for <code>MatchOptions</code> for <code>CostCategories</code> and <code>Tags</code> are <code>EQUALS</code>, <code>ABSENT</code>, and <code>CASE_SENSITIVE</code>. Default values are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Metrics",
			"name": "Metrics",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>Which metrics are returned in the query. For more information about blended and unblended rates, see <a href=\"http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/\">Why does the \"blended\" annotation appear on some line items in my bill?</a>. </p> <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>, <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>. </p> <note> <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage numbers without taking into account the units. For example, if you aggregate <code>usageQuantity</code> across all of Amazon EC2, the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hours and GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by <code>UsageType</code> or <code>UsageTypeGroups</code>. </p> </note> <p> <code>Metrics</code> is required for <code>GetCostAndUsage</code> requests.</p>",
			"routing": {
				"send": {
					"property": "Metrics",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "GroupBy",
			"type": "json",
			"default": "[\n  {\n    \"Key\": {}\n  }\n]",
			"description": "<p>You can group Amazon Web Services costs using up to two different groups, either dimensions, tag keys, cost categories, or any two group by types.</p> <p>Valid values for the <code>DIMENSION</code> type are <code>AZ</code>, <code>INSTANCE_TYPE</code>, <code>LEGAL_ENTITY_NAME</code>, <code>INVOICING_ENTITY</code>, <code>LINKED_ACCOUNT</code>, <code>OPERATION</code>, <code>PLATFORM</code>, <code>PURCHASE_TYPE</code>, <code>SERVICE</code>, <code>TENANCY</code>, <code>RECORD_TYPE</code>, and <code>USAGE_TYPE</code>.</p> <p>When you group by the <code>TAG</code> type and include a valid tag key, you get all tag values, including empty strings.</p>",
			"routing": {
				"send": {
					"property": "GroupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetCostAndUsageWithResources",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetCostAndUsageWithResources",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Cost And Usage With Resources",
					"value": "AWSInsightsIndexService.GetCostAndUsageWithResources"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "Sets the start and end dates for retrieving Amazon Web Services costs. The range must be within the last 14 days (the start date cannot be earlier than 14 days ago). The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Granularity",
			"name": "Granularity",
			"type": "options",
			"default": "DAILY",
			"description": "Sets the Amazon Web Services cost granularity to <code>MONTHLY</code>, <code>DAILY</code>, or <code>HOURLY</code>. If <code>Granularity</code> isn't set, the response object doesn't include the <code>Granularity</code>, <code>MONTHLY</code>, <code>DAILY</code>, or <code>HOURLY</code>. ",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"property": "Granularity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Filters Amazon Web Services costs by different dimensions. For example, you can specify <code>SERVICE</code> and <code>LINKED_ACCOUNT</code> and get the costs that are associated with that account's usage of that service. You can nest <code>Expression</code> objects to define any combination of dimension filters. For more information, see <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a>. </p> <p>The <code>GetCostAndUsageWithResources</code> operation requires that you either group by or filter by a <code>ResourceId</code>. It requires the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> <code>\"SERVICE = Amazon Elastic Compute Cloud - Compute\"</code> in the filter.</p> <p>Valid values for <code>MatchOptions</code> for <code>Dimensions</code> are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p> <p>Valid values for <code>MatchOptions</code> for <code>CostCategories</code> and <code>Tags</code> are <code>EQUALS</code>, <code>ABSENT</code>, and <code>CASE_SENSITIVE</code>. Default values are <code>EQUALS</code> and <code>CASE_SENSITIVE</code>.</p>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"displayName": "Metrics",
			"name": "Metrics",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>Which metrics are returned in the query. For more information about blended and unblended rates, see <a href=\"http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/\">Why does the \"blended\" annotation appear on some line items in my bill?</a>. </p> <p>Valid values are <code>AmortizedCost</code>, <code>BlendedCost</code>, <code>NetAmortizedCost</code>, <code>NetUnblendedCost</code>, <code>NormalizedUsageAmount</code>, <code>UnblendedCost</code>, and <code>UsageQuantity</code>. </p> <note> <p>If you return the <code>UsageQuantity</code> metric, the service aggregates all usage numbers without taking the units into account. For example, if you aggregate <code>usageQuantity</code> across all of Amazon EC2, the results aren't meaningful because Amazon EC2 compute hours and data transfer are measured in different units (for example, hour or GB). To get more meaningful <code>UsageQuantity</code> metrics, filter by <code>UsageType</code> or <code>UsageTypeGroups</code>. </p> </note> <p> <code>Metrics</code> is required for <code>GetCostAndUsageWithResources</code> requests.</p>",
			"routing": {
				"send": {
					"property": "Metrics",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "GroupBy",
			"type": "json",
			"default": "[\n  {\n    \"Key\": {}\n  }\n]",
			"description": "You can group Amazon Web Services costs using up to two different groups: <code>DIMENSION</code>, <code>TAG</code>, <code>COST_CATEGORY</code>.",
			"routing": {
				"send": {
					"property": "GroupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost And Usage With Resources"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetCostCategories",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetCostCategories",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Cost Categories",
					"value": "AWSInsightsIndexService.GetCostCategories"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "Search String",
			"name": "SearchString",
			"type": "string",
			"default": "",
			"description": "<p>The value that you want to search the filter values for.</p> <p>If you don't specify a <code>CostCategoryName</code>, <code>SearchString</code> is used to filter Cost Category names that match the <code>SearchString</code> pattern. If you specify a <code>CostCategoryName</code>, <code>SearchString</code> is used to filter Cost Category values that match the <code>SearchString</code> pattern.</p>",
			"routing": {
				"send": {
					"property": "SearchString",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The time period of the request. ",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "Cost Category Name",
			"name": "CostCategoryName",
			"type": "string",
			"default": "",
			"description": "The unique name of the Cost Category.",
			"routing": {
				"send": {
					"property": "CostCategoryName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html\"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"LINKED_ACCOUNT_NAME\", \"MatchOptions\": [ \"STARTS_WITH\" ], \"Values\": [ \"a\" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"And\": [ {\"Or\": [ {\"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", \"us-west-1\" ] }}, {\"Tags\": { \"Key\": \"TagName\", \"Values\": [\"Value1\"] } } ]}, {\"Not\": {\"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [\"DataTransfer\"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { \"And\": [ ... ], \"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [ \"DataTransfer\" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>\"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories\"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "json",
			"default": "[\n  {\n    \"SortOrder\": {}\n  }\n]",
			"description": "<p>The value that you sort the data by.</p> <p>The key represents the cost and usage metrics. The following values are supported:</p> <ul> <li> <p> <code>BlendedCost</code> </p> </li> <li> <p> <code>UnblendedCost</code> </p> </li> <li> <p> <code>AmortizedCost</code> </p> </li> <li> <p> <code>NetAmortizedCost</code> </p> </li> <li> <p> <code>NetUnblendedCost</code> </p> </li> <li> <p> <code>UsageQuantity</code> </p> </li> <li> <p> <code>NormalizedUsageAmount</code> </p> </li> </ul> <p>The supported key values for the <code>SortOrder</code> value are <code>ASCENDING</code> and <code>DESCENDING</code>.</p> <p>When you use the <code>SortBy</code> value, the <code>NextPageToken</code> and <code>SearchString</code> key values aren't supported.</p>",
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>This field is only used when the <code>SortBy</code> value is provided in the request.</p> <p>The maximum number of objects that are returned for this request. If <code>MaxResults</code> isn't specified with the <code>SortBy</code> value, the request returns 1000 results as the default value for this parameter.</p> <p>For <code>GetCostCategories</code>, MaxResults has an upper quota of 1000.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "If the number of objects that are still available for retrieval exceeds the quota, Amazon Web Services returns a NextPageToken value in the response. To retrieve the next batch of objects, provide the NextPageToken from the previous call in your next request.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Categories"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetCostForecast",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Forecast"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetCostForecast",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Cost Forecast",
					"value": "AWSInsightsIndexService.GetCostForecast"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Forecast"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The period of time that you want the forecast to cover. The start date must be equal to or no later than the current date to avoid a validation error.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Forecast"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Metric",
			"name": "Metric",
			"type": "options",
			"default": "BLENDED_COST",
			"description": "<p>Which metric Cost Explorer uses to create your forecast. For more information about blended and unblended rates, see <a href=\"http://aws.amazon.com/premiumsupport/knowledge-center/blended-rates-intro/\">Why does the \"blended\" annotation appear on some line items in my bill?</a>. </p> <p>Valid values for a <code>GetCostForecast</code> call are the following:</p> <ul> <li> <p>AMORTIZED_COST</p> </li> <li> <p>BLENDED_COST</p> </li> <li> <p>NET_AMORTIZED_COST</p> </li> <li> <p>NET_UNBLENDED_COST</p> </li> <li> <p>UNBLENDED_COST</p> </li> </ul>",
			"options": [
				{
					"name": "BLENDED COST",
					"value": "BLENDED_COST"
				},
				{
					"name": "UNBLENDED COST",
					"value": "UNBLENDED_COST"
				},
				{
					"name": "AMORTIZED COST",
					"value": "AMORTIZED_COST"
				},
				{
					"name": "NET UNBLENDED COST",
					"value": "NET_UNBLENDED_COST"
				},
				{
					"name": "NET AMORTIZED COST",
					"value": "NET_AMORTIZED_COST"
				},
				{
					"name": "USAGE QUANTITY",
					"value": "USAGE_QUANTITY"
				},
				{
					"name": "NORMALIZED USAGE AMOUNT",
					"value": "NORMALIZED_USAGE_AMOUNT"
				}
			],
			"routing": {
				"send": {
					"property": "Metric",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Forecast"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Granularity",
			"name": "Granularity",
			"type": "options",
			"default": "DAILY",
			"description": "<p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p> <p>The <code>GetCostForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"property": "Granularity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Forecast"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>The filters that you want to use to filter your forecast. The <code>GetCostForecast</code> API supports filtering by the following dimensions:</p> <ul> <li> <p> <code>AZ</code> </p> </li> <li> <p> <code>INSTANCE_TYPE</code> </p> </li> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>LINKED_ACCOUNT_NAME</code> </p> </li> <li> <p> <code>OPERATION</code> </p> </li> <li> <p> <code>PURCHASE_TYPE</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>USAGE_TYPE</code> </p> </li> <li> <p> <code>USAGE_TYPE_GROUP</code> </p> </li> <li> <p> <code>RECORD_TYPE</code> </p> </li> <li> <p> <code>OPERATING_SYSTEM</code> </p> </li> <li> <p> <code>TENANCY</code> </p> </li> <li> <p> <code>SCOPE</code> </p> </li> <li> <p> <code>PLATFORM</code> </p> </li> <li> <p> <code>SUBSCRIPTION_ID</code> </p> </li> <li> <p> <code>LEGAL_ENTITY_NAME</code> </p> </li> <li> <p> <code>DEPLOYMENT_OPTION</code> </p> </li> <li> <p> <code>DATABASE_ENGINE</code> </p> </li> <li> <p> <code>INSTANCE_TYPE_FAMILY</code> </p> </li> <li> <p> <code>BILLING_ENTITY</code> </p> </li> <li> <p> <code>RESERVATION_ID</code> </p> </li> <li> <p> <code>SAVINGS_PLAN_ARN</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Forecast"
					]
				}
			}
		},
		{
			"displayName": "Prediction Interval Level",
			"name": "PredictionIntervalLevel",
			"type": "number",
			"default": 0,
			"description": "Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.",
			"routing": {
				"send": {
					"property": "PredictionIntervalLevel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Forecast"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Cost Forecast"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetDimensionValues",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetDimensionValues",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Dimension Values",
					"value": "AWSInsightsIndexService.GetDimensionValues"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "Search String",
			"name": "SearchString",
			"type": "string",
			"default": "",
			"description": "The value that you want to search the filter values for.",
			"routing": {
				"send": {
					"property": "SearchString",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The start date and end date for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Dimension",
			"name": "Dimension",
			"type": "options",
			"default": "AZ",
			"description": "The name of the dimension. Each <code>Dimension</code> is available for a different <code>Context</code>. For more information, see <code>Context</code>. <code>LINK_ACCOUNT_NAME</code> and <code>SERVICE_CODE</code> can only be used in <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/AAPI_CostCategoryRule.html\">CostCategoryRule</a>. ",
			"options": [
				{
					"name": "AZ",
					"value": "AZ"
				},
				{
					"name": "INSTANCE TYPE",
					"value": "INSTANCE_TYPE"
				},
				{
					"name": "LINKED ACCOUNT",
					"value": "LINKED_ACCOUNT"
				},
				{
					"name": "LINKED ACCOUNT NAME",
					"value": "LINKED_ACCOUNT_NAME"
				},
				{
					"name": "OPERATION",
					"value": "OPERATION"
				},
				{
					"name": "PURCHASE TYPE",
					"value": "PURCHASE_TYPE"
				},
				{
					"name": "REGION",
					"value": "REGION"
				},
				{
					"name": "SERVICE",
					"value": "SERVICE"
				},
				{
					"name": "SERVICE CODE",
					"value": "SERVICE_CODE"
				},
				{
					"name": "USAGE TYPE",
					"value": "USAGE_TYPE"
				},
				{
					"name": "USAGE TYPE GROUP",
					"value": "USAGE_TYPE_GROUP"
				},
				{
					"name": "RECORD TYPE",
					"value": "RECORD_TYPE"
				},
				{
					"name": "OPERATING SYSTEM",
					"value": "OPERATING_SYSTEM"
				},
				{
					"name": "TENANCY",
					"value": "TENANCY"
				},
				{
					"name": "SCOPE",
					"value": "SCOPE"
				},
				{
					"name": "PLATFORM",
					"value": "PLATFORM"
				},
				{
					"name": "SUBSCRIPTION ID",
					"value": "SUBSCRIPTION_ID"
				},
				{
					"name": "LEGAL ENTITY NAME",
					"value": "LEGAL_ENTITY_NAME"
				},
				{
					"name": "DEPLOYMENT OPTION",
					"value": "DEPLOYMENT_OPTION"
				},
				{
					"name": "DATABASE ENGINE",
					"value": "DATABASE_ENGINE"
				},
				{
					"name": "CACHE ENGINE",
					"value": "CACHE_ENGINE"
				},
				{
					"name": "INSTANCE TYPE FAMILY",
					"value": "INSTANCE_TYPE_FAMILY"
				},
				{
					"name": "BILLING ENTITY",
					"value": "BILLING_ENTITY"
				},
				{
					"name": "RESERVATION ID",
					"value": "RESERVATION_ID"
				},
				{
					"name": "RESOURCE ID",
					"value": "RESOURCE_ID"
				},
				{
					"name": "RIGHTSIZING TYPE",
					"value": "RIGHTSIZING_TYPE"
				},
				{
					"name": "SAVINGS PLANS TYPE",
					"value": "SAVINGS_PLANS_TYPE"
				},
				{
					"name": "SAVINGS PLAN ARN",
					"value": "SAVINGS_PLAN_ARN"
				},
				{
					"name": "PAYMENT OPTION",
					"value": "PAYMENT_OPTION"
				},
				{
					"name": "AGREEMENT END DATE TIME AFTER",
					"value": "AGREEMENT_END_DATE_TIME_AFTER"
				},
				{
					"name": "AGREEMENT END DATE TIME BEFORE",
					"value": "AGREEMENT_END_DATE_TIME_BEFORE"
				},
				{
					"name": "INVOICING ENTITY",
					"value": "INVOICING_ENTITY"
				},
				{
					"name": "ANOMALY TOTAL IMPACT ABSOLUTE",
					"value": "ANOMALY_TOTAL_IMPACT_ABSOLUTE"
				},
				{
					"name": "ANOMALY TOTAL IMPACT PERCENTAGE",
					"value": "ANOMALY_TOTAL_IMPACT_PERCENTAGE"
				}
			],
			"routing": {
				"send": {
					"property": "Dimension",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "Context",
			"name": "Context",
			"type": "options",
			"default": "COST_AND_USAGE",
			"description": "<p>The context for the call to <code>GetDimensionValues</code>. This can be <code>RESERVATIONS</code> or <code>COST_AND_USAGE</code>. The default value is <code>COST_AND_USAGE</code>. If the context is set to <code>RESERVATIONS</code>, the resulting dimension values can be used in the <code>GetReservationUtilization</code> operation. If the context is set to <code>COST_AND_USAGE</code>, the resulting dimension values can be used in the <code>GetCostAndUsage</code> operation.</p> <p>If you set the context to <code>COST_AND_USAGE</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>BILLING_ENTITY - The Amazon Web Services seller that your account is with. Possible values are the following:</p> <p>- Amazon Web Services(Amazon Web Services): The entity that sells Amazon Web Services.</p> <p>- AISPL (Amazon Internet Services Pvt. Ltd.): The local Indian entity that's an acting reseller for Amazon Web Services in India.</p> <p>- Amazon Web Services Marketplace: The entity that supports the sale of solutions that are built on Amazon Web Services by third-party software providers.</p> </li> <li> <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p> </li> <li> <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p> </li> <li> <p>DATABASE_ENGINE - The Amazon Relational Database Service database. Examples are Aurora or MySQL.</p> </li> <li> <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>INSTANCE_TYPE_FAMILY - A family of instance types optimized to fit different use cases. Examples are <code>Compute Optimized</code> (for example, <code>C4</code>, <code>C5</code>, <code>C6g</code>, and <code>C7g</code>), <code>Memory Optimization</code> (for example, <code>R4</code>, <code>R5n</code>, <code>R5b</code>, and <code>R6g</code>).</p> </li> <li> <p>INVOICING_ENTITY - The name of the entity that issues the Amazon Web Services invoice.</p> </li> <li> <p>LEGAL_ENTITY_NAME - The name of the organization that sells you Amazon Web Services services, such as Amazon Web Services.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>OPERATING_SYSTEM - The operating system. Examples are Windows or Linux.</p> </li> <li> <p>OPERATION - The action performed. Examples include <code>RunInstance</code> and <code>CreateBucket</code>.</p> </li> <li> <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>PURCHASE_TYPE - The reservation type of the purchase that this usage is related to. Examples include On-Demand Instances and Standard Reserved Instances.</p> </li> <li> <p>RESERVATION_ID - The unique identifier for an Amazon Web Services Reservation Instance.</p> </li> <li> <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.</p> </li> <li> <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute).</p> </li> <li> <p>SERVICE - The Amazon Web Services service such as Amazon DynamoDB.</p> </li> <li> <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p> </li> <li> <p>USAGE_TYPE - The type of usage. An example is DataTransfer-In-Bytes. The response for the <code>GetDimensionValues</code> operation includes a unit attribute. Examples include GB and Hrs.</p> </li> <li> <p>USAGE_TYPE_GROUP - The grouping of common usage types. An example is Amazon EC2: CloudWatch – Alarms. The response for this operation includes a unit attribute.</p> </li> <li> <p>REGION - The Amazon Web Services Region.</p> </li> <li> <p>RECORD_TYPE - The different types of charges such as Reserved Instance (RI) fees, usage costs, tax refunds, and credits.</p> </li> <li> <p>RESOURCE_ID - The unique identifier of the resource. ResourceId is an opt-in feature only available for last 14 days for EC2-Compute Service.</p> </li> </ul> <p>If you set the context to <code>RESERVATIONS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>AZ - The Availability Zone. An example is <code>us-east-1a</code>.</p> </li> <li> <p>CACHE_ENGINE - The Amazon ElastiCache operating system. Examples are Windows or Linux.</p> </li> <li> <p>DEPLOYMENT_OPTION - The scope of Amazon Relational Database Service deployments. Valid values are <code>SingleAZ</code> and <code>MultiAZ</code>.</p> </li> <li> <p>INSTANCE_TYPE - The type of Amazon EC2 instance. An example is <code>m4.xlarge</code>.</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>PLATFORM - The Amazon EC2 operating system. Examples are Windows or Linux.</p> </li> <li> <p>REGION - The Amazon Web Services Region.</p> </li> <li> <p>SCOPE (Utilization only) - The scope of a Reserved Instance (RI). Values are regional or a single Availability Zone.</p> </li> <li> <p>TAG (Coverage only) - The tags that are associated with a Reserved Instance (RI).</p> </li> <li> <p>TENANCY - The tenancy of a resource. Examples are shared or dedicated.</p> </li> </ul> <p>If you set the context to <code>SAVINGS_PLANS</code>, you can use the following dimensions for searching:</p> <ul> <li> <p>SAVINGS_PLANS_TYPE - Type of Savings Plans (EC2 Instance or Compute)</p> </li> <li> <p>PAYMENT_OPTION - The payment option for the given Savings Plans (for example, All Upfront)</p> </li> <li> <p>REGION - The Amazon Web Services Region.</p> </li> <li> <p>INSTANCE_TYPE_FAMILY - The family of instances (For example, <code>m5</code>)</p> </li> <li> <p>LINKED_ACCOUNT - The description in the attribute map that includes the full name of the member account. The value field contains the Amazon Web Services ID of the member account.</p> </li> <li> <p>SAVINGS_PLAN_ARN - The unique identifier for your Savings Plans.</p> </li> </ul>",
			"options": [
				{
					"name": "COST AND USAGE",
					"value": "COST_AND_USAGE"
				},
				{
					"name": "RESERVATIONS",
					"value": "RESERVATIONS"
				},
				{
					"name": "SAVINGS PLANS",
					"value": "SAVINGS_PLANS"
				}
			],
			"routing": {
				"send": {
					"property": "Context",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html\"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"LINKED_ACCOUNT_NAME\", \"MatchOptions\": [ \"STARTS_WITH\" ], \"Values\": [ \"a\" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"And\": [ {\"Or\": [ {\"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", \"us-west-1\" ] }}, {\"Tags\": { \"Key\": \"TagName\", \"Values\": [\"Value1\"] } } ]}, {\"Not\": {\"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [\"DataTransfer\"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { \"And\": [ ... ], \"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [ \"DataTransfer\" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>\"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories\"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "json",
			"default": "[\n  {\n    \"SortOrder\": {}\n  }\n]",
			"description": "<p>The value that you want to sort the data by.</p> <p>The key represents cost and usage metrics. The following values are supported:</p> <ul> <li> <p> <code>BlendedCost</code> </p> </li> <li> <p> <code>UnblendedCost</code> </p> </li> <li> <p> <code>AmortizedCost</code> </p> </li> <li> <p> <code>NetAmortizedCost</code> </p> </li> <li> <p> <code>NetUnblendedCost</code> </p> </li> <li> <p> <code>UsageQuantity</code> </p> </li> <li> <p> <code>NormalizedUsageAmount</code> </p> </li> </ul> <p>The supported values for the <code>SortOrder</code> key are <code>ASCENDING</code> or <code>DESCENDING</code>.</p> <p>When you specify a <code>SortBy</code> paramater, the context must be <code>COST_AND_USAGE</code>. Further, when using <code>SortBy</code>, <code>NextPageToken</code> and <code>SearchString</code> aren't supported.</p>",
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>This field is only used when SortBy is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with SortBy, the request returns 1000 results as the default value for this parameter.</p> <p>For <code>GetDimensionValues</code>, MaxResults has an upper limit of 1000.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Dimension Values"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetReservationCoverage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetReservationCoverage",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Reservation Coverage",
					"value": "AWSInsightsIndexService.GetReservationCoverage"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The start and end dates of the period that you want to retrieve data about reservation coverage for. You can retrieve data for a maximum of 13 months: the last 12 months and the current month. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. ",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "GroupBy",
			"type": "json",
			"default": "[\n  {\n    \"Key\": {}\n  }\n]",
			"description": "<p>You can group the data by the following attributes:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>INVOICING_ENTITY</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>TENANCY</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "GroupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "Granularity",
			"name": "Granularity",
			"type": "options",
			"default": "DAILY",
			"description": "<p>The granularity of the Amazon Web Services cost data for the reservation. Valid values are <code>MONTHLY</code> and <code>DAILY</code>.</p> <p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set, the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>.</p> <p>The <code>GetReservationCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"property": "Granularity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Filters utilization data by dimensions. You can filter by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DATABASE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>TAG</p> </li> <li> <p>TENANCY</p> </li> </ul> <p> <code>GetReservationCoverage</code> uses the same <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension. You can nest only one level deep. If there are multiple values for a dimension, they are OR'd together.</p> <p>If you don't provide a <code>SERVICE</code> filter, Cost Explorer defaults to EC2.</p> <p>Cost category is also supported.</p>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "Metrics",
			"name": "Metrics",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "<p>The measurement that you want your reservation coverage reported in.</p> <p>Valid values are <code>Hour</code>, <code>Unit</code>, and <code>Cost</code>. You can use multiple values in a request.</p>",
			"routing": {
				"send": {
					"property": "Metrics",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "json",
			"default": "{\n  \"SortOrder\": {}\n}",
			"description": "<p>The value by which you want to sort the data.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>OnDemandCost</code> </p> </li> <li> <p> <code>CoverageHoursPercentage</code> </p> </li> <li> <p> <code>OnDemandHours</code> </p> </li> <li> <p> <code>ReservedHours</code> </p> </li> <li> <p> <code>TotalRunningHours</code> </p> </li> <li> <p> <code>CoverageNormalizedUnitsPercentage</code> </p> </li> <li> <p> <code>OnDemandNormalizedUnits</code> </p> </li> <li> <p> <code>ReservedNormalizedUnits</code> </p> </li> <li> <p> <code>TotalRunningNormalizedUnits</code> </p> </li> <li> <p> <code>Time</code> </p> </li> </ul> <p>Supported values for <code>SortOrder</code> are <code>ASCENDING</code> or <code>DESCENDING</code>.</p>",
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of objects that you returned for this request. If more objects are available, in the response, Amazon Web Services provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Coverage"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetReservationPurchaseRecommendation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetReservationPurchaseRecommendation",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Reservation Purchase Recommendation",
					"value": "AWSInsightsIndexService.GetReservationPurchaseRecommendation"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Account ID",
			"name": "AccountId",
			"type": "string",
			"default": "",
			"description": "The account ID that's associated with the recommendation. ",
			"routing": {
				"send": {
					"property": "AccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service",
			"name": "Service",
			"type": "string",
			"default": "",
			"description": "The specific service that you want recommendations for.",
			"routing": {
				"send": {
					"property": "Service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html\"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"LINKED_ACCOUNT_NAME\", \"MatchOptions\": [ \"STARTS_WITH\" ], \"Values\": [ \"a\" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"And\": [ {\"Or\": [ {\"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", \"us-west-1\" ] }}, {\"Tags\": { \"Key\": \"TagName\", \"Values\": [\"Value1\"] } } ]}, {\"Not\": {\"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [\"DataTransfer\"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { \"And\": [ ... ], \"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [ \"DataTransfer\" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>\"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories\"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Account Scope",
			"name": "AccountScope",
			"type": "options",
			"default": "PAYER",
			"description": "The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.",
			"options": [
				{
					"name": "PAYER",
					"value": "PAYER"
				},
				{
					"name": "LINKED",
					"value": "LINKED"
				}
			],
			"routing": {
				"send": {
					"property": "AccountScope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Lookback Period In Days",
			"name": "LookbackPeriodInDays",
			"type": "options",
			"default": "SEVEN_DAYS",
			"description": "The number of previous days that you want Amazon Web Services to consider when it calculates your recommendations.",
			"options": [
				{
					"name": "SEVEN DAYS",
					"value": "SEVEN_DAYS"
				},
				{
					"name": "THIRTY DAYS",
					"value": "THIRTY_DAYS"
				},
				{
					"name": "SIXTY DAYS",
					"value": "SIXTY_DAYS"
				}
			],
			"routing": {
				"send": {
					"property": "LookbackPeriodInDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Term In Years",
			"name": "TermInYears",
			"type": "options",
			"default": "ONE_YEAR",
			"description": "The reservation term that you want recommendations for.",
			"options": [
				{
					"name": "ONE YEAR",
					"value": "ONE_YEAR"
				},
				{
					"name": "THREE YEARS",
					"value": "THREE_YEARS"
				}
			],
			"routing": {
				"send": {
					"property": "TermInYears",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Payment Option",
			"name": "PaymentOption",
			"type": "options",
			"default": "NO_UPFRONT",
			"description": "The reservation purchase option that you want recommendations for.",
			"options": [
				{
					"name": "NO UPFRONT",
					"value": "NO_UPFRONT"
				},
				{
					"name": "PARTIAL UPFRONT",
					"value": "PARTIAL_UPFRONT"
				},
				{
					"name": "ALL UPFRONT",
					"value": "ALL_UPFRONT"
				},
				{
					"name": "LIGHT UTILIZATION",
					"value": "LIGHT_UTILIZATION"
				},
				{
					"name": "MEDIUM UTILIZATION",
					"value": "MEDIUM_UTILIZATION"
				},
				{
					"name": "HEAVY UTILIZATION",
					"value": "HEAVY_UTILIZATION"
				}
			],
			"routing": {
				"send": {
					"property": "PaymentOption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Service Specification",
			"name": "ServiceSpecification",
			"type": "json",
			"default": "{\n  \"EC2Specification\": {\n    \"OfferingClass\": {}\n  }\n}",
			"description": "The hardware specifications for the service instances that you want recommendations for, such as standard or convertible Amazon EC2 instances.",
			"routing": {
				"send": {
					"property": "ServiceSpecification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "PageSize",
			"type": "number",
			"default": 0,
			"description": "The number of recommendations that you want returned in a single response object.",
			"routing": {
				"send": {
					"property": "PageSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The pagination token that indicates the next set of results that you want to retrieve.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetReservationUtilization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetReservationUtilization",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Reservation Utilization",
					"value": "AWSInsightsIndexService.GetReservationUtilization"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "Sets the start and end dates for retrieving Reserved Instance (RI) utilization. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. ",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "GroupBy",
			"type": "json",
			"default": "[\n  {\n    \"Key\": {}\n  }\n]",
			"description": "Groups only by <code>SUBSCRIPTION_ID</code>. Metadata is included.",
			"routing": {
				"send": {
					"property": "GroupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "Granularity",
			"name": "Granularity",
			"type": "options",
			"default": "DAILY",
			"description": "<p>If <code>GroupBy</code> is set, <code>Granularity</code> can't be set. If <code>Granularity</code> isn't set, the response object doesn't include <code>Granularity</code>, either <code>MONTHLY</code> or <code>DAILY</code>. If both <code>GroupBy</code> and <code>Granularity</code> aren't set, <code>GetReservationUtilization</code> defaults to <code>DAILY</code>.</p> <p>The <code>GetReservationUtilization</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"property": "Granularity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Filters utilization data by dimensions. You can filter by the following dimensions:</p> <ul> <li> <p>AZ</p> </li> <li> <p>CACHE_ENGINE</p> </li> <li> <p>DEPLOYMENT_OPTION</p> </li> <li> <p>INSTANCE_TYPE</p> </li> <li> <p>LINKED_ACCOUNT</p> </li> <li> <p>OPERATING_SYSTEM</p> </li> <li> <p>PLATFORM</p> </li> <li> <p>REGION</p> </li> <li> <p>SERVICE</p> </li> <li> <p>SCOPE</p> </li> <li> <p>TENANCY</p> </li> </ul> <p> <code>GetReservationUtilization</code> uses the same <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension, and nesting is supported up to only one level deep. If there are multiple values for a dimension, they are OR'd together.</p>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "json",
			"default": "{\n  \"SortOrder\": {}\n}",
			"description": "<p>The value that you want to sort the data by.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>UtilizationPercentage</code> </p> </li> <li> <p> <code>UtilizationPercentageInUnits</code> </p> </li> <li> <p> <code>PurchasedHours</code> </p> </li> <li> <p> <code>PurchasedUnits</code> </p> </li> <li> <p> <code>TotalActualHours</code> </p> </li> <li> <p> <code>TotalActualUnits</code> </p> </li> <li> <p> <code>UnusedHours</code> </p> </li> <li> <p> <code>UnusedUnits</code> </p> </li> <li> <p> <code>OnDemandCostOfRIHoursUsed</code> </p> </li> <li> <p> <code>NetRISavings</code> </p> </li> <li> <p> <code>TotalPotentialRISavings</code> </p> </li> <li> <p> <code>AmortizedUpfrontFee</code> </p> </li> <li> <p> <code>AmortizedRecurringFee</code> </p> </li> <li> <p> <code>TotalAmortizedFee</code> </p> </li> <li> <p> <code>RICostForUnusedHours</code> </p> </li> <li> <p> <code>RealizedSavings</code> </p> </li> <li> <p> <code>UnrealizedSavings</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>",
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of objects that you returned for this request. If more objects are available, in the response, Amazon Web Services provides a NextPageToken value that you can use in a subsequent call to get the next batch of objects.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Reservation Utilization"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetRightsizingRecommendation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Rightsizing Recommendation"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetRightsizingRecommendation",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Rightsizing Recommendation",
					"value": "AWSInsightsIndexService.GetRightsizingRecommendation"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Rightsizing Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html\"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"LINKED_ACCOUNT_NAME\", \"MatchOptions\": [ \"STARTS_WITH\" ], \"Values\": [ \"a\" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"And\": [ {\"Or\": [ {\"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", \"us-west-1\" ] }}, {\"Tags\": { \"Key\": \"TagName\", \"Values\": [\"Value1\"] } } ]}, {\"Not\": {\"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [\"DataTransfer\"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { \"And\": [ ... ], \"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [ \"DataTransfer\" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>\"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories\"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Rightsizing Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Configuration",
			"name": "Configuration",
			"type": "json",
			"default": "{\n  \"BenefitsConsidered\": {}\n}",
			"description": "You can use Configuration to customize recommendations across two attributes. You can choose to view recommendations for instances within the same instance families or across different instance families. You can also choose to view your estimated savings that are associated with recommendations with consideration of existing Savings Plans or RI benefits, or neither. ",
			"routing": {
				"send": {
					"property": "Configuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Rightsizing Recommendation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Service",
			"name": "Service",
			"type": "string",
			"default": "",
			"description": "The specific service that you want recommendations for. The only valid value for <code>GetRightsizingRecommendation</code> is \"<code>AmazonEC2</code>\".",
			"routing": {
				"send": {
					"property": "Service",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Rightsizing Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "PageSize",
			"type": "number",
			"default": 0,
			"description": "The number of recommendations that you want returned in a single response object.",
			"routing": {
				"send": {
					"property": "PageSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Rightsizing Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The pagination token that indicates the next set of results that you want to retrieve.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Rightsizing Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Rightsizing Recommendation"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansCoverage",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetSavingsPlansCoverage",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Savings Plans Coverage",
					"value": "AWSInsightsIndexService.GetSavingsPlansCoverage"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Group By",
			"name": "GroupBy",
			"type": "json",
			"default": "[\n  {\n    \"Key\": {}\n  }\n]",
			"description": "You can group the data using the attributes <code>INSTANCE_FAMILY</code>, <code>REGION</code>, or <code>SERVICE</code>.",
			"routing": {
				"send": {
					"property": "GroupBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Granularity",
			"name": "Granularity",
			"type": "options",
			"default": "DAILY",
			"description": "<p>The granularity of the Amazon Web Services cost data for your Savings Plans. <code>Granularity</code> can't be set if <code>GroupBy</code> is set.</p> <p>The <code>GetSavingsPlansCoverage</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"property": "Granularity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Filters Savings Plans coverage data by dimensions. You can filter data for Savings Plans usage with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>INSTANCE_FAMILY</code> </p> </li> </ul> <p> <code>GetSavingsPlansCoverage</code> uses the same <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension. If there are multiple values for a dimension, they are OR'd together.</p> <p>Cost category is also supported.</p>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Metrics",
			"name": "Metrics",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The measurement that you want your Savings Plans coverage reported in. The only valid value is <code>SpendCoveredBySavingsPlans</code>.",
			"routing": {
				"send": {
					"property": "Metrics",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The number of items to be returned in a response. The default is <code>20</code>, with a minimum value of <code>1</code>.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "json",
			"default": "{\n  \"SortOrder\": {}\n}",
			"description": "<p>The value that you want to sort the data by.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>SpendCoveredBySavingsPlan</code> </p> </li> <li> <p> <code>OnDemandCost</code> </p> </li> <li> <p> <code>CoveragePercentage</code> </p> </li> <li> <p> <code>TotalCost</code> </p> </li> <li> <p> <code>InstanceFamily</code> </p> </li> <li> <p> <code>Region</code> </p> </li> <li> <p> <code>Service</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>",
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Coverage"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Savings Plans Purchase Recommendation",
					"value": "AWSInsightsIndexService.GetSavingsPlansPurchaseRecommendation"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Savings Plans Type",
			"name": "SavingsPlansType",
			"type": "options",
			"default": "COMPUTE_SP",
			"description": "The Savings Plans recommendation type that's requested.",
			"options": [
				{
					"name": "COMPUTE SP",
					"value": "COMPUTE_SP"
				},
				{
					"name": "EC 2 INSTANCE SP",
					"value": "EC2_INSTANCE_SP"
				},
				{
					"name": "SAGEMAKER SP",
					"value": "SAGEMAKER_SP"
				}
			],
			"routing": {
				"send": {
					"property": "SavingsPlansType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Term In Years",
			"name": "TermInYears",
			"type": "options",
			"default": "ONE_YEAR",
			"description": "The savings plan recommendation term that's used to generate these recommendations.",
			"options": [
				{
					"name": "ONE YEAR",
					"value": "ONE_YEAR"
				},
				{
					"name": "THREE YEARS",
					"value": "THREE_YEARS"
				}
			],
			"routing": {
				"send": {
					"property": "TermInYears",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Payment Option",
			"name": "PaymentOption",
			"type": "options",
			"default": "NO_UPFRONT",
			"description": "The payment option that's used to generate these recommendations.",
			"options": [
				{
					"name": "NO UPFRONT",
					"value": "NO_UPFRONT"
				},
				{
					"name": "PARTIAL UPFRONT",
					"value": "PARTIAL_UPFRONT"
				},
				{
					"name": "ALL UPFRONT",
					"value": "ALL_UPFRONT"
				},
				{
					"name": "LIGHT UTILIZATION",
					"value": "LIGHT_UTILIZATION"
				},
				{
					"name": "MEDIUM UTILIZATION",
					"value": "MEDIUM_UTILIZATION"
				},
				{
					"name": "HEAVY UTILIZATION",
					"value": "HEAVY_UTILIZATION"
				}
			],
			"routing": {
				"send": {
					"property": "PaymentOption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Account Scope",
			"name": "AccountScope",
			"type": "options",
			"default": "PAYER",
			"description": "The account scope that you want your recommendations for. Amazon Web Services calculates recommendations including the management account and member accounts if the value is set to <code>PAYER</code>. If the value is <code>LINKED</code>, recommendations are calculated for individual member accounts only.",
			"options": [
				{
					"name": "PAYER",
					"value": "PAYER"
				},
				{
					"name": "LINKED",
					"value": "LINKED"
				}
			],
			"routing": {
				"send": {
					"property": "AccountScope",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "PageSize",
			"type": "number",
			"default": 0,
			"description": "The number of recommendations that you want returned in a single response object.",
			"routing": {
				"send": {
					"property": "PageSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Lookback Period In Days",
			"name": "LookbackPeriodInDays",
			"type": "options",
			"default": "SEVEN_DAYS",
			"description": "The lookback period that's used to generate the recommendation.",
			"options": [
				{
					"name": "SEVEN DAYS",
					"value": "SEVEN_DAYS"
				},
				{
					"name": "THIRTY DAYS",
					"value": "THIRTY_DAYS"
				},
				{
					"name": "SIXTY DAYS",
					"value": "SIXTY_DAYS"
				}
			],
			"routing": {
				"send": {
					"property": "LookbackPeriodInDays",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>You can filter your recommendations by Account ID with the <code>LINKED_ACCOUNT</code> dimension. To filter your recommendations by Account ID, specify <code>Key</code> as <code>LINKED_ACCOUNT</code> and <code>Value</code> as the comma-separated Acount ID(s) that you want to see Savings Plans purchase recommendations for.</p> <p>For GetSavingsPlansPurchaseRecommendation, the <code>Filter</code> doesn't include <code>CostCategories</code> or <code>Tags</code>. It only includes <code>Dimensions</code>. With <code>Dimensions</code>, <code>Key</code> must be <code>LINKED_ACCOUNT</code> and <code>Value</code> can be a single Account ID or multiple comma-separated Account IDs that you want to see Savings Plans Purchase Recommendations for. <code>AND</code> and <code>OR</code> operators are not supported.</p>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Purchase Recommendation"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilization",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetSavingsPlansUtilization",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Savings Plans Utilization",
					"value": "AWSInsightsIndexService.GetSavingsPlansUtilization"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization"
					]
				}
			}
		},
		{
			"displayName": "Granularity",
			"name": "Granularity",
			"type": "options",
			"default": "DAILY",
			"description": "<p>The granularity of the Amazon Web Services utillization data for your Savings Plans.</p> <p>The <code>GetSavingsPlansUtilization</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"property": "Granularity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>SAVINGS_PLAN_ARN</code> </p> </li> <li> <p> <code>SAVINGS_PLANS_TYPE</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>PAYMENT_OPTION</code> </p> </li> <li> <p> <code>INSTANCE_TYPE_FAMILY</code> </p> </li> </ul> <p> <code>GetSavingsPlansUtilization</code> uses the same <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension.</p>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "json",
			"default": "{\n  \"SortOrder\": {}\n}",
			"description": "<p>The value that you want to sort the data by.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>UtilizationPercentage</code> </p> </li> <li> <p> <code>TotalCommitment</code> </p> </li> <li> <p> <code>UsedCommitment</code> </p> </li> <li> <p> <code>UnusedCommitment</code> </p> </li> <li> <p> <code>NetSavings</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>",
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetSavingsPlansUtilizationDetails",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Savings Plans Utilization Details",
					"value": "AWSInsightsIndexService.GetSavingsPlansUtilizationDetails"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The time period that you want the usage and costs for. The <code>Start</code> date must be within 13 months. The <code>End</code> date must be after the <code>Start</code> date, and before the current date. Future dates can't be used as an <code>End</code> date.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Filters Savings Plans utilization coverage data for active Savings Plans dimensions. You can filter data with the following dimensions:</p> <ul> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>SAVINGS_PLAN_ARN</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>PAYMENT_OPTION</code> </p> </li> <li> <p> <code>INSTANCE_TYPE_FAMILY</code> </p> </li> </ul> <p> <code>GetSavingsPlansUtilizationDetails</code> uses the same <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> object as the other operations, but only <code>AND</code> is supported among each dimension.</p>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "Data Type",
			"name": "DataType",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The data type.",
			"routing": {
				"send": {
					"property": "DataType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The number of items to be returned in a response. The default is <code>20</code>, with a minimum value of <code>1</code>.",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "json",
			"default": "{\n  \"SortOrder\": {}\n}",
			"description": "<p>The value that you want to sort the data by.</p> <p>The following values are supported for <code>Key</code>:</p> <ul> <li> <p> <code>UtilizationPercentage</code> </p> </li> <li> <p> <code>TotalCommitment</code> </p> </li> <li> <p> <code>UsedCommitment</code> </p> </li> <li> <p> <code>UnusedCommitment</code> </p> </li> <li> <p> <code>NetSavings</code> </p> </li> <li> <p> <code>AmortizedRecurringCommitment</code> </p> </li> <li> <p> <code>AmortizedUpfrontCommitment</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p>",
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Savings Plans Utilization Details"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetTags",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Tags",
					"value": "AWSInsightsIndexService.GetTags"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "Search String",
			"name": "SearchString",
			"type": "string",
			"default": "",
			"description": "The value that you want to search for.",
			"routing": {
				"send": {
					"property": "SearchString",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The start and end dates for retrieving the dimension values. The start date is inclusive, but the end date is exclusive. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "Tag Key",
			"name": "TagKey",
			"type": "string",
			"default": "",
			"description": "The key of the tag that you want to return values for.",
			"routing": {
				"send": {
					"property": "TagKey",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>Use <code>Expression</code> to filter in various Cost Explorer APIs.</p> <p>Not all <code>Expression</code> types are supported in each API. Refer to the documentation for each specific API to see what is supported.</p> <p>There are two patterns:</p> <ul> <li> <p>Simple dimension values.</p> <ul> <li> <p>There are three types of simple dimension values: <code>CostCategories</code>, <code>Tags</code>, and <code>Dimensions</code>.</p> <ul> <li> <p>Specify the <code>CostCategories</code> field to define a filter that acts on Cost Categories.</p> </li> <li> <p>Specify the <code>Tags</code> field to define a filter that acts on Cost Allocation Tags.</p> </li> <li> <p>Specify the <code>Dimensions</code> field to define a filter that acts on the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_DimensionValues.html\"> <code>DimensionValues</code> </a>.</p> </li> </ul> </li> <li> <p>For each filter type, you can set the dimension name and values for the filters that you plan to use.</p> <ul> <li> <p>For example, you can filter for <code>REGION==us-east-1 OR REGION==us-west-1</code>. For <code>GetRightsizingRecommendation</code>, the Region is a full name (for example, <code>REGION==US East (N. Virginia)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", “us-west-1” ] } }</code> </p> </li> <li> <p>As shown in the previous example, lists of dimension values are combined with <code>OR</code> when applying the filter.</p> </li> </ul> </li> <li> <p>You can also set different match options to further control how the filter behaves. Not all APIs support match options. Refer to the documentation for each specific API to see what is supported.</p> <ul> <li> <p>For example, you can filter for linked account names that start with “a”.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"Dimensions\": { \"Key\": \"LINKED_ACCOUNT_NAME\", \"MatchOptions\": [ \"STARTS_WITH\" ], \"Values\": [ \"a\" ] } }</code> </p> </li> </ul> </li> </ul> </li> <li> <p>Compound <code>Expression</code> types with logical operations.</p> <ul> <li> <p>You can use multiple <code>Expression</code> types and the logical operators <code>AND/OR/NOT</code> to create a list of one or more <code>Expression</code> objects. By doing this, you can filter by more advanced options.</p> </li> <li> <p>For example, you can filter by <code>((REGION == us-east-1 OR REGION == us-west-1) OR (TAG.Type == Type1)) AND (USAGE_TYPE != DataTransfer)</code>.</p> </li> <li> <p>The corresponding <code>Expression</code> for this example is as follows: <code>{ \"And\": [ {\"Or\": [ {\"Dimensions\": { \"Key\": \"REGION\", \"Values\": [ \"us-east-1\", \"us-west-1\" ] }}, {\"Tags\": { \"Key\": \"TagName\", \"Values\": [\"Value1\"] } } ]}, {\"Not\": {\"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [\"DataTransfer\"] }}} ] } </code> </p> </li> </ul> <note> <p>Because each <code>Expression</code> can have only one operator, the service returns an error if more than one is specified. The following example shows an <code>Expression</code> object that creates an error: <code> { \"And\": [ ... ], \"Dimensions\": { \"Key\": \"USAGE_TYPE\", \"Values\": [ \"DataTransfer\" ] } } </code> </p> <p>The following is an example of the corresponding error message: <code>\"Expression has more than one roots. Only one root operator is allowed for each expression: And, Or, Not, Dimensions, Tags, CostCategories\"</code> </p> </note> </li> </ul> <note> <p>For the <code>GetRightsizingRecommendation</code> action, a combination of OR and NOT isn't supported. OR isn't supported between different dimensions, or dimensions and tags. NOT operators aren't supported. Dimensions are also limited to <code>LINKED_ACCOUNT</code>, <code>REGION</code>, or <code>RIGHTSIZING_TYPE</code>.</p> <p>For the <code>GetReservationPurchaseRecommendation</code> action, only NOT is supported. AND and OR aren't supported. Dimensions are limited to <code>LINKED_ACCOUNT</code>.</p> </note>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "Sort By",
			"name": "SortBy",
			"type": "json",
			"default": "[\n  {\n    \"SortOrder\": {}\n  }\n]",
			"description": "<p>The value that you want to sort the data by.</p> <p>The key represents cost and usage metrics. The following values are supported:</p> <ul> <li> <p> <code>BlendedCost</code> </p> </li> <li> <p> <code>UnblendedCost</code> </p> </li> <li> <p> <code>AmortizedCost</code> </p> </li> <li> <p> <code>NetAmortizedCost</code> </p> </li> <li> <p> <code>NetUnblendedCost</code> </p> </li> <li> <p> <code>UsageQuantity</code> </p> </li> <li> <p> <code>NormalizedUsageAmount</code> </p> </li> </ul> <p>The supported values for <code>SortOrder</code> are <code>ASCENDING</code> and <code>DESCENDING</code>.</p> <p>When you use <code>SortBy</code>, <code>NextPageToken</code> and <code>SearchString</code> aren't supported.</p>",
			"routing": {
				"send": {
					"property": "SortBy",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "<p>This field is only used when SortBy is provided in the request. The maximum number of objects that are returned for this request. If MaxResults isn't specified with SortBy, the request returns 1000 results as the default value for this parameter.</p> <p>For <code>GetTags</code>, MaxResults has an upper quota of 1000.</p>",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.GetUsageForecast",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Usage Forecast"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.GetUsageForecast",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Get Usage Forecast",
					"value": "AWSInsightsIndexService.GetUsageForecast"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Usage Forecast"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Time Period",
			"name": "TimePeriod",
			"type": "json",
			"default": "{\n  \"End\": {}\n}",
			"description": "The start and end dates of the period that you want to retrieve usage forecast for. The start date is included in the period, but the end date isn't included in the period. For example, if <code>start</code> is <code>2017-01-01</code> and <code>end</code> is <code>2017-05-01</code>, then the cost and usage data is retrieved from <code>2017-01-01</code> up to and including <code>2017-04-30</code> but not including <code>2017-05-01</code>. The start date must be equal to or later than the current date to avoid a validation error.",
			"routing": {
				"send": {
					"property": "TimePeriod",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Usage Forecast"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Metric",
			"name": "Metric",
			"type": "options",
			"default": "BLENDED_COST",
			"description": "<p>Which metric Cost Explorer uses to create your forecast.</p> <p>Valid values for a <code>GetUsageForecast</code> call are the following:</p> <ul> <li> <p>USAGE_QUANTITY</p> </li> <li> <p>NORMALIZED_USAGE_AMOUNT</p> </li> </ul>",
			"options": [
				{
					"name": "BLENDED COST",
					"value": "BLENDED_COST"
				},
				{
					"name": "UNBLENDED COST",
					"value": "UNBLENDED_COST"
				},
				{
					"name": "AMORTIZED COST",
					"value": "AMORTIZED_COST"
				},
				{
					"name": "NET UNBLENDED COST",
					"value": "NET_UNBLENDED_COST"
				},
				{
					"name": "NET AMORTIZED COST",
					"value": "NET_AMORTIZED_COST"
				},
				{
					"name": "USAGE QUANTITY",
					"value": "USAGE_QUANTITY"
				},
				{
					"name": "NORMALIZED USAGE AMOUNT",
					"value": "NORMALIZED_USAGE_AMOUNT"
				}
			],
			"routing": {
				"send": {
					"property": "Metric",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Usage Forecast"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Granularity",
			"name": "Granularity",
			"type": "options",
			"default": "DAILY",
			"description": "<p>How granular you want the forecast to be. You can get 3 months of <code>DAILY</code> forecasts or 12 months of <code>MONTHLY</code> forecasts.</p> <p>The <code>GetUsageForecast</code> operation supports only <code>DAILY</code> and <code>MONTHLY</code> granularities.</p>",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "MONTHLY",
					"value": "MONTHLY"
				},
				{
					"name": "HOURLY",
					"value": "HOURLY"
				}
			],
			"routing": {
				"send": {
					"property": "Granularity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Usage Forecast"
					]
				}
			}
		},
		{
			"displayName": "Filter",
			"name": "Filter",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>The filters that you want to use to filter your forecast. The <code>GetUsageForecast</code> API supports filtering by the following dimensions:</p> <ul> <li> <p> <code>AZ</code> </p> </li> <li> <p> <code>INSTANCE_TYPE</code> </p> </li> <li> <p> <code>LINKED_ACCOUNT</code> </p> </li> <li> <p> <code>LINKED_ACCOUNT_NAME</code> </p> </li> <li> <p> <code>OPERATION</code> </p> </li> <li> <p> <code>PURCHASE_TYPE</code> </p> </li> <li> <p> <code>REGION</code> </p> </li> <li> <p> <code>SERVICE</code> </p> </li> <li> <p> <code>USAGE_TYPE</code> </p> </li> <li> <p> <code>USAGE_TYPE_GROUP</code> </p> </li> <li> <p> <code>RECORD_TYPE</code> </p> </li> <li> <p> <code>OPERATING_SYSTEM</code> </p> </li> <li> <p> <code>TENANCY</code> </p> </li> <li> <p> <code>SCOPE</code> </p> </li> <li> <p> <code>PLATFORM</code> </p> </li> <li> <p> <code>SUBSCRIPTION_ID</code> </p> </li> <li> <p> <code>LEGAL_ENTITY_NAME</code> </p> </li> <li> <p> <code>DEPLOYMENT_OPTION</code> </p> </li> <li> <p> <code>DATABASE_ENGINE</code> </p> </li> <li> <p> <code>INSTANCE_TYPE_FAMILY</code> </p> </li> <li> <p> <code>BILLING_ENTITY</code> </p> </li> <li> <p> <code>RESERVATION_ID</code> </p> </li> <li> <p> <code>SAVINGS_PLAN_ARN</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "Filter",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Usage Forecast"
					]
				}
			}
		},
		{
			"displayName": "Prediction Interval Level",
			"name": "PredictionIntervalLevel",
			"type": "number",
			"default": 0,
			"description": "Amazon Web Services Cost Explorer always returns the mean forecast as a single point. You can request a prediction interval around the mean by specifying a confidence level. The higher the confidence level, the more confident Cost Explorer is about the actual value falling in the prediction interval. Higher confidence levels result in wider prediction intervals.",
			"routing": {
				"send": {
					"property": "PredictionIntervalLevel",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Usage Forecast"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Usage Forecast"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.ListCostAllocationTags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.ListCostAllocationTags",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service List Cost Allocation Tags",
					"value": "AWSInsightsIndexService.ListCostAllocationTags"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "Status",
			"type": "options",
			"default": "Active",
			"description": "The status of cost allocation tag keys that are returned for this request. ",
			"options": [
				{
					"name": "Active",
					"value": "Active"
				},
				{
					"name": "Inactive",
					"value": "Inactive"
				}
			],
			"routing": {
				"send": {
					"property": "Status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "Tag Keys",
			"name": "TagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The list of cost allocation tag keys that are returned for this request. ",
			"routing": {
				"send": {
					"property": "TagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "AWSGenerated",
			"description": "The type of <code>CostAllocationTag</code> object that are returned for this request. The <code>AWSGenerated</code> type tags are tags that Amazon Web Services defines and applies to support Amazon Web Services resources for cost allocation purposes. The <code>UserDefined</code> type tags are tags that you define, create, and apply to resources. ",
			"options": [
				{
					"name": "AWS Generated",
					"value": "AWSGenerated"
				},
				{
					"name": "User Defined",
					"value": "UserDefined"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The maximum number of objects that are returned for this request. By default, the request returns 100 results. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Allocation Tags"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.ListCostCategoryDefinitions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Category Definitions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"description": "Pagination limit",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MaxResults",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Category Definitions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"description": "Pagination token",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "NextToken",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Category Definitions"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.ListCostCategoryDefinitions",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service List Cost Category Definitions",
					"value": "AWSInsightsIndexService.ListCostCategoryDefinitions"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Category Definitions"
					]
				}
			}
		},
		{
			"displayName": "Effective On",
			"name": "EffectiveOn",
			"type": "string",
			"default": "",
			"description": "The date when the Cost Category was effective. ",
			"routing": {
				"send": {
					"property": "EffectiveOn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Category Definitions"
					]
				}
			}
		},
		{
			"displayName": "Next Token",
			"name": "NextToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results. Amazon Web Services provides the token when the response from a previous call has more results than the maximum page size. ",
			"routing": {
				"send": {
					"property": "NextToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Category Definitions"
					]
				}
			}
		},
		{
			"displayName": "Max Results",
			"name": "MaxResults",
			"type": "number",
			"default": 0,
			"description": "The number of entries a paginated response contains. ",
			"routing": {
				"send": {
					"property": "MaxResults",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Category Definitions"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Cost Category Definitions"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service List Savings Plans Purchase Recommendation Generation",
					"value": "AWSInsightsIndexService.ListSavingsPlansPurchaseRecommendationGeneration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "Generation Status",
			"name": "GenerationStatus",
			"type": "options",
			"default": "SUCCEEDED",
			"description": "The status of the recommendation generation.",
			"options": [
				{
					"name": "SUCCEEDED",
					"value": "SUCCEEDED"
				},
				{
					"name": "PROCESSING",
					"value": "PROCESSING"
				},
				{
					"name": "FAILED",
					"value": "FAILED"
				}
			],
			"routing": {
				"send": {
					"property": "GenerationStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "Recommendation Ids",
			"name": "RecommendationIds",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The IDs for each specific recommendation.",
			"routing": {
				"send": {
					"property": "RecommendationIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "Page Size",
			"name": "PageSize",
			"type": "number",
			"default": 0,
			"description": "The number of recommendations that you want returned in a single response object.",
			"routing": {
				"send": {
					"property": "PageSize",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "Next Page Token",
			"name": "NextPageToken",
			"type": "string",
			"default": "",
			"description": "The token to retrieve the next set of results.",
			"routing": {
				"send": {
					"property": "NextPageToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.ListTagsForResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.ListTagsForResource",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service List Tags For Resource",
					"value": "AWSInsightsIndexService.ListTagsForResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html\">ResourceTag</a>.",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"List Tags For Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.ProvideAnomalyFeedback",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Provide Anomaly Feedback"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.ProvideAnomalyFeedback",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Provide Anomaly Feedback",
					"value": "AWSInsightsIndexService.ProvideAnomalyFeedback"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Provide Anomaly Feedback"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Anomaly ID",
			"name": "AnomalyId",
			"type": "string",
			"default": "",
			"description": "A cost anomaly ID. ",
			"routing": {
				"send": {
					"property": "AnomalyId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Provide Anomaly Feedback"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Feedback",
			"name": "Feedback",
			"type": "options",
			"default": "YES",
			"description": "Describes whether the cost anomaly was a planned activity or you considered it an anomaly. ",
			"options": [
				{
					"name": "YES",
					"value": "YES"
				},
				{
					"name": "NO",
					"value": "NO"
				},
				{
					"name": "PLANNED ACTIVITY",
					"value": "PLANNED_ACTIVITY"
				}
			],
			"routing": {
				"send": {
					"property": "Feedback",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Provide Anomaly Feedback"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Provide Anomaly Feedback"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Start Savings Plans Purchase Recommendation Generation",
					"value": "AWSInsightsIndexService.StartSavingsPlansPurchaseRecommendationGeneration"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Start Savings Plans Purchase Recommendation Generation"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.TagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.TagResource",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Tag Resource",
					"value": "AWSInsightsIndexService.TagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html\">ResourceTag</a>. ",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Tags",
			"name": "ResourceTags",
			"type": "json",
			"default": "[\n  {\n    \"Value\": {}\n  }\n]",
			"description": "<p> A list of tag key-value pairs to be added to the resource.</p> <p>Each tag consists of a key and a value, and each key must be unique for the resource. The following restrictions apply to resource tags:</p> <ul> <li> <p>Although the maximum number of array members is 200, you can assign a maximum of 50 user-tags to one resource. The remaining are reserved for Amazon Web Services use</p> </li> <li> <p>The maximum length of a key is 128 characters</p> </li> <li> <p>The maximum length of a value is 256 characters</p> </li> <li> <p>Keys and values can only contain alphanumeric characters, spaces, and any of the following: <code>_.:/=+@-</code> </p> </li> <li> <p>Keys and values are case sensitive</p> </li> <li> <p>Keys and values are trimmed for any leading or trailing whitespaces</p> </li> <li> <p>Don’t use <code>aws:</code> as a prefix for your keys. This prefix is reserved for Amazon Web Services use</p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ResourceTags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Tag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.UntagResource",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.UntagResource",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Untag Resource",
					"value": "AWSInsightsIndexService.UntagResource"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Arn",
			"name": "ResourceArn",
			"type": "string",
			"default": "",
			"description": "The Amazon Resource Name (ARN) of the resource. For a list of supported resources, see <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_ResourceTag.html\">ResourceTag</a>. ",
			"routing": {
				"send": {
					"property": "ResourceArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resource Tag Keys",
			"name": "ResourceTagKeys",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of tag keys associated with tags that need to be removed from the resource. If you specify a tag key that doesn't exist, it's ignored. Although the maximum number of array members is 200, user-tag maximum is 50. The remaining are reserved for Amazon Web Services use. ",
			"routing": {
				"send": {
					"property": "ResourceTagKeys",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Untag Resource"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalyMonitor",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.UpdateAnomalyMonitor",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Update Anomaly Monitor",
					"value": "AWSInsightsIndexService.UpdateAnomalyMonitor"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Monitor"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Monitor Arn",
			"name": "MonitorArn",
			"type": "string",
			"default": "",
			"description": "Cost anomaly monitor Amazon Resource Names (ARNs). ",
			"routing": {
				"send": {
					"property": "MonitorArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "Monitor Name",
			"name": "MonitorName",
			"type": "string",
			"default": "",
			"description": "The new name for the cost anomaly monitor. ",
			"routing": {
				"send": {
					"property": "MonitorName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Monitor"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.UpdateAnomalySubscription",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.UpdateAnomalySubscription",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Update Anomaly Subscription",
					"value": "AWSInsightsIndexService.UpdateAnomalySubscription"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscription Arn",
			"name": "SubscriptionArn",
			"type": "string",
			"default": "",
			"description": "A cost anomaly subscription Amazon Resource Name (ARN). ",
			"routing": {
				"send": {
					"property": "SubscriptionArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Threshold",
			"name": "Threshold",
			"type": "number",
			"default": 0,
			"description": "<p>(deprecated)</p> <p>The update to the threshold value for receiving notifications. </p> <p>This field has been deprecated. To update a threshold, use ThresholdExpression. Continued use of Threshold will be treated as shorthand syntax for a ThresholdExpression.</p>Threshold has been deprecated in favor of ThresholdExpression",
			"routing": {
				"send": {
					"property": "Threshold",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Frequency",
			"name": "Frequency",
			"type": "options",
			"default": "DAILY",
			"description": "The update to the frequency value that subscribers receive notifications. ",
			"options": [
				{
					"name": "DAILY",
					"value": "DAILY"
				},
				{
					"name": "IMMEDIATE",
					"value": "IMMEDIATE"
				},
				{
					"name": "WEEKLY",
					"value": "WEEKLY"
				}
			],
			"routing": {
				"send": {
					"property": "Frequency",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Monitor Arn List",
			"name": "MonitorArnList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of cost anomaly monitor ARNs. ",
			"routing": {
				"send": {
					"property": "MonitorArnList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Subscribers",
			"name": "Subscribers",
			"type": "json",
			"default": "[\n  {\n    \"Type\": {},\n    \"Status\": {}\n  }\n]",
			"description": "The update to the subscriber list. ",
			"routing": {
				"send": {
					"property": "Subscribers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Subscription Name",
			"name": "SubscriptionName",
			"type": "string",
			"default": "",
			"description": "The new name of the subscription. ",
			"routing": {
				"send": {
					"property": "SubscriptionName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Threshold Expression",
			"name": "ThresholdExpression",
			"type": "json",
			"default": "{\n  \"Or\": [\n    {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    }\n  ],\n  \"And\": {},\n  \"Not\": {},\n  \"Dimensions\": {},\n  \"Tags\": {},\n  \"CostCategories\": {}\n}",
			"description": "<p>The update to the <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html\">Expression</a> object used to specify the anomalies that you want to generate alerts for. This supports dimensions and nested expressions. The supported dimensions are <code>ANOMALY_TOTAL_IMPACT_ABSOLUTE</code> and <code>ANOMALY_TOTAL_IMPACT_PERCENTAGE</code>. The supported nested expression types are <code>AND</code> and <code>OR</code>. The match option <code>GREATER_THAN_OR_EQUAL</code> is required. Values must be numbers between 0 and 10,000,000,000.</p> <p>The following are examples of valid ThresholdExpressions:</p> <ul> <li> <p>Absolute threshold: <code>{ \"Dimensions\": { \"Key\": \"ANOMALY_TOTAL_IMPACT_ABSOLUTE\", \"MatchOptions\": [ \"GREATER_THAN_OR_EQUAL\" ], \"Values\": [ \"100\" ] } }</code> </p> </li> <li> <p>Percentage threshold: <code>{ \"Dimensions\": { \"Key\": \"ANOMALY_TOTAL_IMPACT_PERCENTAGE\", \"MatchOptions\": [ \"GREATER_THAN_OR_EQUAL\" ], \"Values\": [ \"100\" ] } }</code> </p> </li> <li> <p> <code>AND</code> two thresholds together: <code>{ \"And\": [ { \"Dimensions\": { \"Key\": \"ANOMALY_TOTAL_IMPACT_ABSOLUTE\", \"MatchOptions\": [ \"GREATER_THAN_OR_EQUAL\" ], \"Values\": [ \"100\" ] } }, { \"Dimensions\": { \"Key\": \"ANOMALY_TOTAL_IMPACT_PERCENTAGE\", \"MatchOptions\": [ \"GREATER_THAN_OR_EQUAL\" ], \"Values\": [ \"100\" ] } } ] }</code> </p> </li> <li> <p> <code>OR</code> two thresholds together: <code>{ \"Or\": [ { \"Dimensions\": { \"Key\": \"ANOMALY_TOTAL_IMPACT_ABSOLUTE\", \"MatchOptions\": [ \"GREATER_THAN_OR_EQUAL\" ], \"Values\": [ \"100\" ] } }, { \"Dimensions\": { \"Key\": \"ANOMALY_TOTAL_IMPACT_PERCENTAGE\", \"MatchOptions\": [ \"GREATER_THAN_OR_EQUAL\" ], \"Values\": [ \"100\" ] } } ] }</code> </p> </li> </ul>",
			"routing": {
				"send": {
					"property": "ThresholdExpression",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Anomaly Subscription"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.UpdateCostAllocationTagsStatus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Allocation Tags Status"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.UpdateCostAllocationTagsStatus",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Update Cost Allocation Tags Status",
					"value": "AWSInsightsIndexService.UpdateCostAllocationTagsStatus"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Allocation Tags Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cost Allocation Tags Status",
			"name": "CostAllocationTagsStatus",
			"type": "json",
			"default": "[\n  {\n    \"Status\": {}\n  }\n]",
			"description": "The list of <code>CostAllocationTagStatusEntry</code> objects that are used to update cost allocation tags status for this request. ",
			"routing": {
				"send": {
					"property": "CostAllocationTagsStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Allocation Tags Status"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Allocation Tags Status"
					]
				}
			}
		},
		{
			"displayName": "POST /#X-Amz-Target=AWSInsightsIndexService.UpdateCostCategoryDefinition",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "X Amz Target",
			"name": "X-Amz-Target",
			"required": true,
			"default": "AWSInsightsIndexService.UpdateCostCategoryDefinition",
			"type": "options",
			"options": [
				{
					"name": "AWS Insights Index Service Update Cost Category Definition",
					"value": "AWSInsightsIndexService.UpdateCostCategoryDefinition"
				}
			],
			"routing": {
				"request": {
					"headers": {
						"X-Amz-Target": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Cost Category Arn",
			"name": "CostCategoryArn",
			"type": "string",
			"default": "",
			"description": "The unique identifier for your Cost Category.",
			"routing": {
				"send": {
					"property": "CostCategoryArn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Effective Start",
			"name": "EffectiveStart",
			"type": "string",
			"default": "",
			"description": "The Cost Category's effective start date. It can only be a billing start date (first day of the month). If the date isn't provided, it's the first day of the current month. Dates can't be before the previous twelve months, or in the future.",
			"routing": {
				"send": {
					"property": "EffectiveStart",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rule Version",
			"name": "RuleVersion",
			"type": "options",
			"default": "CostCategoryExpression.v1",
			"description": "The rule schema version in this particular Cost Category.",
			"options": [
				{
					"name": "Cost Category Expression v1",
					"value": "CostCategoryExpression.v1"
				}
			],
			"routing": {
				"send": {
					"property": "RuleVersion",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Rules",
			"name": "Rules",
			"type": "json",
			"default": "[\n  {\n    \"Rule\": {\n      \"Or\": {},\n      \"And\": {},\n      \"Not\": {},\n      \"Dimensions\": {},\n      \"Tags\": {},\n      \"CostCategories\": {}\n    },\n    \"InheritedValue\": {},\n    \"Type\": {}\n  }\n]",
			"description": "The <code>Expression</code> object used to categorize costs. For more information, see <a href=\"https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_CostCategoryRule.html\">CostCategoryRule </a>. ",
			"routing": {
				"send": {
					"property": "Rules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Default Value",
			"name": "DefaultValue",
			"type": "string",
			"default": "",
			"description": "The default value for the cost category.",
			"routing": {
				"send": {
					"property": "DefaultValue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Split Charge Rules",
			"name": "SplitChargeRules",
			"type": "json",
			"default": "[\n  {\n    \"Targets\": {},\n    \"Method\": {},\n    \"Parameters\": {}\n  }\n]",
			"description": " The split charge rules used to allocate your charges between your Cost Category values. ",
			"routing": {
				"send": {
					"property": "SplitChargeRules",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
		{
			"displayName": "Hmac API Key",
			"name": "security_hmac",
			"type": "string",
			"default": "",
			"description": "Amazon Signature authorization v4",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Update Cost Category Definition"
					]
				}
			}
		},
];
