export const EBankingData = [
    {
        name: "E-banking",
        overview: {
            metrics: [
                {
                    name: 'P50',
                    value: "0.32"
                },
                {
                    name: 'P75',
                    value: "0.20"
                },
                {
                    name: 'P95',
                    value: "1.01"
                }
            ],
            transactions: [
                {
                    name: 'Clients',
                    value: -76,
                    type: 'dec',

                },
                {
                    name: `TR(')`,
                    value: "-0.03",
                    type: 'inc',

                },
                {
                    name: 'Errors',
                    value: 13,
                    type: 'dec',

                },
                {
                    name: 'Flux',
                    value: 100,
                    type: 'inc',

                }
            ]
        },
        flow: 10903
    },
    {
        name: "Beneficiary",
        overview: {
            metrics: [
                {
                    name: 'P50',
                    value: "0.03",
                },
                {
                    name: 'P75',
                    value: "0.03",
                },
                {
                    name: 'P95',
                    value: "0.09",
                }
            ],
            transactions: [
                {
                    name: 'Clients',
                    value: 149,
                    type: 'inc',
                },
                {
                    name: 'TR',
                    value: "-0.25",
                    type: 'inc',
                },
                {
                    name: 'Errors',
                    value: 1,
                    type: 'dec',
                },
                {
                    name: 'Flux',
                    value: 100,
                    type: 'inc',
                }
            ]
        },
        flow: 149
    },
    {
        name: "Card",
        overview: {
            metrics: [
                {
                    name: 'P50',
                    value: "1.30",
                },
                {
                    name: 'P75',
                    value: "1.33",
                },
                {
                    name: 'P95',
                    value: "2.09",
                }
            ],
            transactions: [
                {
                    name: 'Clients',
                    value: 37,
                    type: 'inc',
                },
                {
                    name: 'TR',
                    value: "0.58",
                    type: 'dec',
                },
                {
                    name: 'Errors',
                    value: 14,
                    type: 'dec',
                },
                {
                    name: 'Flux',
                    value: 100,
                    type: 'inc',
                }
            ]
        },
        flow: 100
    },
    {
        name: "Payment de facture",
        overview: {
            metrics: [
                { name: 'P50', value: "0.02" },
                { name: 'P75', value: "0.02" },
                { name: 'P95', value: "0.05" }
            ],
            transactions: [
                {
                    name: 'Clients',
                    value: 2309,
                    type: 'inc',
                },
                {
                    name: 'TR',
                    value: "-0.00",
                    type: 'dec',

                },
                {
                    name: 'Errors',
                    value: 26,
                    type: 'dec',

                },
                {
                    name: 'Flux',
                    value: 100,
                    type: 'inc',

                }
            ]
        },
        flow: 2309
    }
];
