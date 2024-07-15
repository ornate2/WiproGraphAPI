//@ui5-bundle wiprographui/Component-preload.js
sap.ui.require.preload({
	"wiprographui/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","wiprographui/model/models"],function(e,i,t){"use strict";return e.extend("wiprographui.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"wiprographui/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("wiprographui.controller.App",{onInit:function(){}})});
},
	"wiprographui/controller/WiproGraphUI.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(r){"use strict";return r.extend("wiprographui.controller.WiproGraphUI",{onInit:function(){}})});
},
	"wiprographui/i18n/i18n.properties":'# This is the resource bundle for wipro.workflowuimodule\n#Texts for manifest.json\n#XTIT: Application name\nappTitle=Task UI\n#YDES: Application description\nappDescription=A workflow task UI application\n#XTIT: Main view title\ntitle=PO Form\nlisttitle = Trigger WF\nVendorName=Vendor Name\nPONumber=PO Number\nBuyer=Buyer\nPOValue=PO Value\nPOCurrency=PO Currency\nVendor=Vendor\nbtnSubmitApproval = Submit\nStartDate=Start Date\nEndDate=End Date\nTrigger=Trigger WF\nsavingForm=PO Details\nCreateSFA = Create Saving Form against\nCluster=Cluster\nPONO=PO No\nPODate= PO Date\nPOVCurr=PO Value with Currency\nVendorCode=Vendor Code\nCategory=Category\nProjectDes=Project Description\nRegion=Region\nSstartdate=S0aving Start Date\nSenddate=Saving End Date\nQuarter=Quarter\nSaving=Saving\nLastYPONO=Last Year PO No\nLastYPOValue=Last Year PO Value\nLastYPOCurr=Last Year PO Currency\nAttachment=Attachment\nQvalue=Quoted Value\nCurrency=Currency\nOValue=Order Value\nSavings=Savings in USD\nSavingsPer=Savings Percentage\nSavingType=Saving Type\nBFMValid=BFM Validation\nYOYSav=YOY Saving-Function BFM Approval\nSavingDistribution=Savings Distribution\nbtnSubmit = Submit\nbtnReject=Reject\nnoDataDescriptiont = No File Available.\nRefershText=RefershText\nConfirmation=Confirmation\nbtnOk=ok\nbtnCancel=Cancel\nNEw=NEW\nBFM=BFM\nClusterhead= Cluster head\nApprover=Approved\n ',
	"wiprographui/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"wiprographui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.1","toolsId":"c92bd471-a876-4648-a1ec-04246bf909da"},"dataSources":{"mainService":{"uri":"odata/v4/po/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"GraphAPI-MailSent":{"semanticObject":"GraphAPI","action":"MailSent","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"dependencies":{"minUI5Version":"1.126.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"wiprographui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"wiprographui.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteWiproGraphUI","pattern":":?query:","target":["TargetWiproGraphUI"]}],"targets":{"TargetWiproGraphUI":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"WiproGraphUI","viewName":"WiproGraphUI"}}},"rootView":{"viewName":"wiprographui.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"GraphAPI"}}',
	"wiprographui/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"wiprographui/view/App.view.xml":'<mvc:View controllerName="wiprographui.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"wiprographui/view/WiproGraphUI.view.xml":'<mvc:View controllerName="wiprographui.controller.WiproGraphUI"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"  xmlns:f="sap.ui.layout.form"\n     xmlns:uxap="sap.uxap"  xmlns:forms="sap.ui.layout.form"    xmlns:core="sap.ui.core"  xmlns:u="sap.ui.unified"\n xmlns:layout="sap.ui.layout"  xmlns:ta="sap.ui.table"  xmlns:l="sap.ui.layout"\n xmlns="sap.m" xmlns:ui="sap.ui.table"\n xmlns:t="sap.ui.table"><App id="app"><Page id="scroll" title="{i18n>title}" ><content><IconTabBar id="DisposalAssetIconTabId"\n                    class="sapUiResponsiveContentPadding" select="IconTabBarSelect"><items><IconTabFilter icon="sap-icon://request" id="data_Form"\n                            text="{i18n>NEw}" key="PO_Form_Details" tooltip="{i18n>NEw}"\n                            class="MasterDataIconTabBar" design="Vertical"><ta:Table id="New_Form_Details"\n                                selectionMode="None" rows="{PoDataModel>/}" sort="sortDeliveryDate"\n                                ariaLabelledBy="title"  alternateRowColors="true"><ta:extension></ta:extension><ta:columns><ta:Column ><Label text="{i18n>PONumber}" tooltip="{i18n>PONumber}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>PONumber}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>POValue}" tooltip="{i18n>POValue}"\n                                            design="Bold"></Label><ta:template><Text text="{PoDataModel>POValue}"></Text></ta:template></ta:Column><ta:Column ><Label text="{i18n>POCurrency}" tooltip="{i18n>POCurrency}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>POCurrency}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>Vendor}" tooltip="{i18n>Vendor}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>Vendor}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>VendorName}" tooltip="{i18n>VendorName}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>VendorName}" /></ta:template></ta:Column></ta:columns></ta:Table></IconTabFilter><IconTabFilter icon="sap-icon://bbyd-active-sales" id="data_BFM"\n                            text="{i18n>BFM}" key="PO_Form_Details" tooltip="{i18n>BFM}"\n                            class="MasterDataIconTabBar" design="Vertical"><ta:Table id="BFM_Form_Details"\n                                selectionMode="None" rows="{PoDataModel>/}" sort="sortDeliveryDate"\n                                ariaLabelledBy="title"  alternateRowColors="true"><ta:extension></ta:extension><ta:columns><ta:Column ><Label text="{i18n>PONumber}" tooltip="{i18n>PONumber}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>PONumber}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>POValue}" tooltip="{i18n>POValue}"\n                                            design="Bold"></Label><ta:template><Text text="{PoDataModel>POValue}"></Text></ta:template></ta:Column><ta:Column ><Label text="{i18n>POCurrency}" tooltip="{i18n>POCurrency}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>POCurrency}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>Vendor}" tooltip="{i18n>Vendor}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>Vendor}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>VendorName}" tooltip="{i18n>VendorName}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>VendorName}" /></ta:template></ta:Column></ta:columns></ta:Table></IconTabFilter><IconTabFilter icon="sap-icon://account" id="data_Clusterhead"\n                            text="{i18n>Clusterhead}" key="PO_Form_Details" tooltip="{i18n>Clusterhead}"\n                            class="MasterDataIconTabBar" design="Vertical"><ta:Table id="Clusterhead_Form_Details"\n                                selectionMode="None" rows="{PoDataModel>/}" sort="sortDeliveryDate"\n                                ariaLabelledBy="title"  alternateRowColors="true"><ta:extension></ta:extension><ta:columns><ta:Column ><Label text="{i18n>PONumber}" tooltip="{i18n>PONumber}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>PONumber}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>POValue}" tooltip="{i18n>POValue}"\n                                            design="Bold"></Label><ta:template><Text text="{PoDataModel>POValue}"></Text></ta:template></ta:Column><ta:Column ><Label text="{i18n>POCurrency}" tooltip="{i18n>POCurrency}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>POCurrency}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>Vendor}" tooltip="{i18n>Vendor}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>Vendor}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>VendorName}" tooltip="{i18n>VendorName}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>VendorName}" /></ta:template></ta:Column></ta:columns></ta:Table></IconTabFilter><IconTabFilter icon="sap-icon://approvals" id="data_approver"\n                            text="{i18n>Approver}" key="PO_Form_Details" tooltip="{i18n>Approver}"\n                            class="MasterDataIconTabBar" design="Vertical"><ta:Table id="Approver_Form_Details"\n                                selectionMode="None" rows="{PoDataModel>/}" sort="sortDeliveryDate"\n                                ariaLabelledBy="title"  alternateRowColors="true"><ta:extension></ta:extension><ta:columns><ta:Column ><Label text="{i18n>PONumber}" tooltip="{i18n>PONumber}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>PONumber}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>POValue}" tooltip="{i18n>POValue}"\n                                            design="Bold"></Label><ta:template><Text text="{PoDataModel>POValue}"></Text></ta:template></ta:Column><ta:Column ><Label text="{i18n>POCurrency}" tooltip="{i18n>POCurrency}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>POCurrency}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>Vendor}" tooltip="{i18n>Vendor}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>Vendor}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>VendorName}" tooltip="{i18n>VendorName}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>VendorName}" /></ta:template></ta:Column></ta:columns></ta:Table></IconTabFilter><IconTabFilter icon="sap-icon://employee-rejections" id="data_Reject"\n                            text="{i18n>btnReject}" key="PO_Form_Details" tooltip="{i18n>Approver}"\n                            class="MasterDataIconTabBar" design="Vertical"><ta:Table id="Reject_Form_Details"\n                                selectionMode="None" rows="{PoDataModel>/}" sort="sortDeliveryDate"\n                                ariaLabelledBy="title"  alternateRowColors="true"><ta:extension></ta:extension><ta:columns><ta:Column ><Label text="{i18n>PONumber}" tooltip="{i18n>PONumber}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>PONumber}" id=""/></ta:template></ta:Column><ta:Column ><Label text="{i18n>POValue}" tooltip="{i18n>POValue}"\n                                            design="Bold"></Label><ta:template><Text text="{PoDataModel>POValue}"></Text></ta:template></ta:Column><ta:Column ><Label text="{i18n>POCurrency}" tooltip="{i18n>POCurrency}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>POCurrency}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>Vendor}" tooltip="{i18n>Vendor}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>Vendor}" /></ta:template></ta:Column><ta:Column ><Label text="{i18n>VendorName}" tooltip="{i18n>VendorName}"\n                                            design="Bold" /><ta:template><Text text="{PoDataModel>VendorName}" /></ta:template></ta:Column></ta:columns></ta:Table></IconTabFilter></items></IconTabBar></content><footer><OverflowToolbar><ToolbarSpacer /><Button icon="sap-icon://save"\n                            text="{i18n>btnSubmitApproval}" press="SubmitValidation"\n                            type="Accept"></Button><Button icon="sap-icon://excel-attachment"\n                            text="{i18n>Approver}" press="ApproverPress"\n                            class="buttonClass" type="Accept"></Button><Button icon="sap-icon://curriculum"\n                            text="{i18n>btnReject}" press="RejectPress"\n                            class="buttonClass" type="Reject"></Button></OverflowToolbar></footer></Page></App></mvc:View>\n \n '
});
//# sourceMappingURL=Component-preload.js.map
