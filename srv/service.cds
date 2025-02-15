service POService {
    function fetchData() returns String;

    @readonly
    @cds.persistence.exists
    entity GraphPO {
        CreateSaving: String;
        Cluster: String;
        Category: String;
        ProjectDes: String;
        Region: String;
        LastYearPONo: String;
        LastYearPOValue: String;
        Attachment: String;
        QuatedValue: String;
        Currency: String;
        OrderValue: String;
        Savings: String;
        SavingsPer: String;
        SavingType: String;
        BFMValidation: String;
        SavingsDistribution: Boolean;
        YOYSavingFunction: String;
        PONumber: String;
        Buyer: String;
        POValue: String;
        POCurrency: String;
        Vendor: String;
        StartDate: String;
        EndDate: String;
        VendorName: String;
        TriggerStatus: String;
    }

    entity GraphPOSet as projection on GraphPO;
}