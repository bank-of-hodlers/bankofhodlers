// Contains all strings used in the website in Fees Page.


export class FaqsText{
    faqs_header_one = "FAQs on"
    faqs_header_one_cont = " Earning Interest"
    faqs_header_two = "FAQs on"
    faqs_header_two_cont = "INR Deposits & Withdrawals"
    faqs_header_three = "FAQs on"
    faqs_header_three_cont = "Deposits & Withdrawals"
    faqs_header_four = "FAQs on"
    faqs_header_four_cont = " The Company"
    faqs_header_five = "FAQs on"
    faqs_header_five_cont = "Other Product Queries"

    // Data for FAQs on Earnig Interest

    faqsInterest = [
        {
            "id":"200",
            "ques":"Will I earn interest as soon as I deposit my funds?",
            "answer":"Yes, you will start earning interest as soon as you deposit your funds. You can view the interest rates for each token <a href='https://bankofhodlers.com/fees&rates'>here.</a>",
        },
        {
            "id":"201",
            "ques":"What are the interest rates that I can earn on the platform?",
            "answer":"You can view the interest rates for each token <a href='https://bankofhodlers.com/fees&rates'>here.</a>",
        },
        {
            "id":"202",
            "ques":"What are the APY interest rates that are displayed on my dashboard? How do I earn these rates?",
            "answer":"APY means Annual Percentage Yield, and it is the total amount you can make in a year (including the compounding in your principle amount). We compound your principle amount at the end of a weekly payout or a fixed deposit payout. <br><br> So to make the maximum yield on your funds in one year, it's very simple: <br> - Lock all your funds in 1 month Fixed Deposits <br> - Renew the FIxed Deposits every time they mature<br><br>At the end of the year, you would have made the listed APY rates. ",
        },
        {
            "id":"203",
            "ques":"What is a fixed deposit?",
            "answer":"Fixed deposits let you earn a higher interest rate on your funds, by locking in your funds for a 1,3 or 6 month period. You can check the fixed deposit interest rates for each token  <a href='https://bankofhodlers.com/fees&rates'>here.</a>",
        },
        {
            "id":"204",
            "ques":"Can I opt out of a fixed deposit at any time? Is there any penalty if I opt out?",
            "answer":"Yes, you can opt out of a fixed deposit at any time. There are no fees or penalties for opting out. You would still receive the base interest rates for the duration in which you had an active fixed deposit.",
        },
        {
            "id":"205",
            "ques":"How much will I earn in a fixed deposit?",
            "answer":"You can check the fixed deposit interest rates for each token <a href='https://bankofhodlers.com/fees&rates'>here.</a>",
        },
        {
            "id":"206",
            "ques":"How often will I get an interest payout?",
            "answer":"You will get a payout every week. If you have funds in a fixed deposit, you will receive the payout at the end of the fixed deposit term.",
        },
        {
            "id":"207",
            "ques":"Is my principle amount compounded after every payout?",
            "answer":"Yes, your principle amount is compounded at the end of every payout.",
        },
        {
            "id":"208",
            "ques":"Can I use external wallets to access the platform? Will I earn interest on my funds in my external wallet?",
            "answer":"Yes, you can use your MetaMask and Trust wallet to access the platform. You will not be earning interest on these funds, but you can transfer your funds to your BoH wallet in one-click to start earning interest.",
        },
    ]
    
    faqsTrading = [
        {
            "id":"300",
            "ques":"What do I need for my KYC (India)?",
            "answer":"You would need to provide: <br>- Your basic information (Name, Email ID and Phone Number) <br>- An address proof (Aadhar, Driving Liscense, Passport, Voter ID) <br>- Your PAN Card <br>- A selfie",
        },
        {
            "id":"301",
            "ques":"How long does it take to approve KYC (India)?",
            "answer":"We approve your KYC in under 30 minutes",
        },
        {
            "id":"302",
            "ques":"What payment methods can I use to deposit and withdraw INR? ",
            "answer":"You can use cards, UPI, netbanking, IMPS, RTGS and NEFT.",
        },
        {
            "id":"303",
            "ques":"How long does it take to deposit and withdraw INR?",
            "answer":"For cards, UPI and netbanking, deposits are processed instantly. For IMPS, RTGS and NEFT, they take 1 business day. Withdrawals take 1 business day.",
        },
        {
            "id":"304",
            "ques":"What are the fees for INR deposits and withdraw?",
            "answer":"You can check the fees for INR deposits and withdrawals <a href='https://bankofhodlers.com/fees&rates'>here.</a>",
        },
        {
            "id":"305",
            "ques":"I am not in India but I want to access INR dependent functionalities. What do I do?",
            "answer":"Please write to us at <a href='mailto:hello@bankofhodlers.com'>hello@bankofhodlers.com,<a/> and we will work with you to provide the required functionalities",
        },
    ]

    faqsDepositWithDrawals = [
        {
            "id":"100",
            "ques":"What tokens are supported on the platform?",
            "answer":"You can check the list of our supported tokens, along with their interest rates <a href='https://bankofhodlers.com/fees&rates'>here</a>",
        },
        {
            "id":"101",
            "ques":"What are the limits for deposits?",
            "answer":"Minimum Deposit -  $1 worth of tokens. Maximum Deposit - No Limit",
        },
        {
            "id":"102",
            "ques":"I deposited a very small amount (<$1 worth), and it is not reflecting on my account. What do I do?",
            "answer":"We have a minimum deposit value of $1.<br> If you have deposited an amount below that, you would just need to deposit additional tokens which will total to $1, and the total amount of all your deposits will be reflected in your account.",
        },
        {
            "id":"103",
            "ques":"How long does it take for a deposit to reach the platform?",
            "answer":"BTC usually takes 1-6 hours, and all our other tokens reach almost instantaneously. ",
        },
        {
            "id":"104",
            "ques":"What are the deposit fees?",
            "answer":"We do not charge any deposit fees",
        },
        {
            "id":"105",
            "ques":"What are the limits for withdrawals?",
            "answer":"We do not have any limit for withdrawals",
        },
        {
            "id":"106",
            "ques":"How long does it take to process a withdrawal?",
            "answer":"We process all withdrawals instantly.<br> The only exceptions are large withdrawals (typically >$100K), where we manually verify the withdrawal with the user for added security. This verification is completed in a maximum time of 6 hours.",
        },
        {
            "id":"107",
            "ques":"What are the withdrawal fees?",
            "answer":"We do not charge any withdrawal fees. Only the required network fees would be deducted.",
        },
        {
            "id":"108",
            "ques":"What network is used for USDT, USDC, BUSD, TUSD, PAX, DAI, BAT?",
            "answer":"We use the ERC-20 network for USDT, USDC, BUSD, TUSD, PAX, DAI and BAT",
        },
        {
            "id":"109",
            "ques":"Why do I need to verify large withdrawals with a Bank of Hodlers manager?",
            "answer":"This is done for added security for our high value users. We take security very seriously, and we believe this measure will protect our users against any malicious attacks. ",
        },
        {
            "id":"110",
            "ques":"Why is there a blockchain transaction from my wallet address after I deposit? Are my funds safe?",
            "answer":"Yes, your funds are absolutely safe.<br> We are a lending platform, so all your funds have been moved from your wallet to a centralised lending pool, from which we give loans to borrowers. This is a standard practice across the crypto community.",
        },
    ]

    faqsCompany = [
        {
            "id":"500",
            "ques":"When was Bank of Hodlers founded?",
            "answer":"Bank of Hodlers was founded in September of 2018. You can find the story of how we were founded <a href='https://bankofhodlers.com/about-us'>here.</a>",
        },
        {
            "id":"501",
            "ques":"Who are the team members at Bank of Hodlers?",
            "answer":"We run a lean, agile team of business managers, engineers, designers and product managers. You can find all the members of our team <a href='https://bankofhodlers.com/about-us'>here.</a>",
        },
        {
            "id":"502",
            "ques":"Where are the offices of Bank of Hodlers?",
            "answer":"Our Corporate HQ is in Singapore - 160 Robinson Road, #14-04 Singapore Business Federation Centre, Singapore 068914<br> Our Product and Tech office is in India - No. 220, First floor, 2nd Main Rd, Hoysala Nagar, Indiranagar, Bengaluru, Karnataka 560038",
        },
        {
            "id":"503",
            "ques":"Who are the investors behind Bank of Hodlers?",
            "answer":"Our lead investor is <a href='https://lunex.vc/'>LuneX Ventures,</a> a Singapore based crypto VC. We also have a group of seed investors who are primarily from the crypto and finance community.",
        },
    ]

    faqsFees = [
        {
            "id":"401",
            "ques":"Does Bank of Hodlers have an iOS and Andoird APP?",
            "answer":"Yes, we are available on both <a href='https://apps.apple.com/in/app/bank-of-hodlers/id1509251174'>iOS</a> and <a href='https://play.google.com/store/apps/details?id=com.bankofhodlers.mobile'>Android.</a>",
        },
        {
            "id":"402",
            "ques":"What is Multi Factor Authentication (MFA)? Why do I need it?",
            "answer":"MFA is a hardware based authentication system that elevates the security of your account.<br> We use Google Authenticator for MFA. Once you install the Authenticator APP on your device and activate it on your BoH account, you will need to enter the dynamicly changing passcode given on the Authenticator APP for every critical action on the platform. <br> MFA is an industry best practice, and greatly reduces the risk of someone hacking your account. We highly recommend enabling MFA for your account.",
        },
        {
            "id":"403",
            "ques":"I lost my Google Authenticator device. How do I reset my MFA?",
            "answer":"We go through a rigorous KYC process to reset the MFA for your account. Please write to us at <a href='mailto:hello@bankofhodlers.com'>hello@bankofhodlers.com</a>, and we will reset your MFA as soon as we verify your identity.",
        },
        {
            "id":"404",
            "ques":"How do I unlock my $10 signup BTC bonus?",
            "answer":"You will need to maintain $500 worth of tokens in your account for a week to unlock your promotional $10 BTC",
        },
        {
            "id":"405",
            "ques":"Why can't I withdraw my promotional $10 BTC?",
            "answer":"You will not be able to withdraw your promotional $10 BTC until you have unlocked it. To unlock it, you will need to maintain $500 worth of tokens in your account for a week.",
        },
        {
            "id":"406",
            "ques":"How can I get a loan backed by my crypto?",
            "answer":"You can request a loan through our platform, and we will contact you to process the loan.",
        },
        {
            "id":"407",
            "ques":"What are the terms for loan repayment?",
            "answer":"You can pay back the loan at any time. Theres are no fees or charges, you only need to pay the interest for the duration of the loan. <br>We give loans at a collateralization ratio of above 150%, and liquidate the collateral if the ratio reaches 100%.<br>The minimum loan amount is for $100. <br> You can check the interest rate for borrowing different tokens <a href='https://bankofhodlers.com/fees&rates'>here.</a>",
        },
    ]
}
