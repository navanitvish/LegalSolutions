export const generateAgreementText = (data) => {
  const format = (text, fallback = '____________') => text || fallback;
  
  return `This Rent [House] Agreement is executed at ${format(data.state)} on this ${format(data.commenceDate)}

BY AND BETWEEN:-

Mr. / Mrs. ${format(data.ownerName)} ${format(data.ownerRelation)} ${format(data.ownerRelatedName)}, aged about ${format(data.ownerAge)} years, Occ: ${format(data.ownerOccupation)}, Address: ${format(data.ownerAddress)}.

HEREINAFTER called the "Land Lord"/"Owner" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the ONE (First) PART.

AND:-

Mr. / Mrs. ${format(data.tenantName)} ${format(data.tenantRelation)} ${format(data.tenantRelatedName)}, aged about ${format(data.tenantAge)} years, Occ: ${format(data.tenantOccupation)}, Address: ${format(data.tenantAddress)}.

HEREINAFTER called the "Tenant" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the OTHER (Second) PART.

WHEREAS the "Land Lord" is the absolute owner and possessed or otherwise well and sufficiently entitled to the Flat Residential Property (hereinafter called as the "Residential Property" or "Demised Premises" for the sake of brevity)

Demised Premises: ${format(data.propertyAddress)} ${format(data.propertyArea)} ${format(data.propertyPincode)} ${format(data.propertyCity)} ${format(data.state)} India.

AND WHEREAS at the request of Tenant, the LANDLORD has hereby agreed to let out the above mentioned Demised Premises, to the Tenant on Rental (Month) basis and the LANDLORD has agreed for the same On the following agreed terms and conditions for Letting out the above mentioned Demised Premises.

The Landlord and the Tenant are individually referred to as "Party" and collectively as the "Parties".

AND WHEREAS it was mutually considered expedient to reduce the said terms and conditions into writing

NOW THIS INDENTURE WITNESSETH the Rent Agreement between the Parties there to as follows:

That in consideration of the rent hereby reserved and of the terms, conditions and covenants of this Rental Agreement herein contained and on the part of the respective parties to be observed and performed.

1. DURATION: The Landlord hereby agrees to grant and the Tenant hereby agrees to accept this Rent Agreement of the Demised Premises for a period of ${format(data.duration)} Months only commencing from ${format(data.commenceDate)} to ${format(data.endDate)} both days inclusive.

2. NATURE OF USE PERMITTED: The Tenant shall use the Demised Premises for ${format(data.purpose)} purpose only and shall abide by all the bye-laws, rules and regulations of the local authorities.

3. RENT: The rent payable per month by the Tenant for the Demised Premises shall be Rs. ${format(data.monthlyRent)}/- per month. The rent is payable on or before ${format(data.rentPayDay)} of every month.
   (A) Landlord shall provide a duly signed receipt for the amount received.
   (B) The Tenant shall pay maintenance charges of Rs. ${format(data.maintenanceCharges)}/- per month.
   (C) Payment through electronic mode acknowledgment shall be conclusive proof of payment.

4. SECURITY DEPOSIT: The Tenant has paid a sum of Rs. ${format(data.securityDeposit)}/- to the Landlord being the Security Deposit. The Security deposited is paid through ${format(data.paymentMethod)}.

The deposit shall be refunded only to the Tenant, free of interest, at the time of delivery of vacant possession of the Demised Premises, subject to deduction of any arrears of rent or damages.

If the Landlord fails to refund the security deposit, the Tenant is entitled to hold possession without payment of rent until refund is made. If the landlord fails to make any refund, he shall be liable to pay simple interest to the tenant at ${format(data.interestRate, '0')}% monthly on the amount omitted or failed to refund.

5. ELECTRICITY CHARGES: The Tenant shall pay directly to the concerned authority all electricity charges as per actual meter reading. The Tenant should share the receipts with the Landlord on Request.

6. WATER CHARGES: The Tenant shall pay directly to the concerned authority Water charges as per proportionate consumption. The Tenant should share the receipts with the Landlord on Request.

7. LANDLORD'S COVENANTS:
   A) The Landlord has absolute right, title, interest ownership of the Demised Premises.
   B) The Demised Premises can be legally used for residential purposes.
   C) The Tenant shall be entitled to peaceful enjoyment of the Demised Premises.
   D) The Landlord shall indemnify the Tenant from any defect in title.
   E) No pending litigation affecting the Demised Premises.
   F) All statutory payments and taxes are current.
   G) The Demised Premises are free from all encumbrances.

8. TENANT'S COVENANTS:
   (a) Not to intentionally or negligently damage the premises.
   (b) To pay all water, electricity and other utility charges.
   (c) Take reasonable care of the premises and its contents.
   (d) To permit the Landlord for inspection with advance notice.
   (e) Not to prejudice the rights of the Landlord.
   (f) Keep the Demised Premises in proper condition.
   (g) Not to keep any dangerous or explosive material.

9. DIVISION OF MAINTENANCE RESPONSIBILITY:
   
PART A: Landlord's Responsibilities
1. Structural repairs except those caused by tenant
2. Whitewashing of walls and painting
3. Changing and plumbing pipes when necessary
4. Internal and external electrical wiring

PART B: Tenant's Responsibilities
1. Changing of tap washers and taps
2. Drain cleaning
3. Water closet repairs
4. Wash Basin repairs
5. Bath tub repairs
6. Geyser repairs
7. Circuit breaker repairs
8. Switches and socket repairs
9. Repairs of electrical equipment
10. Kitchen fixtures repairs
11. Replacement of knobs and locks
12. Replacement of fly-nets
13. Replacement of glass panels
14. Maintenance of gardens

10. SUB-LET: The Tenant shall not sub-let, transfer, assign any part of the Demised Premises without prior written consent of the Landlord.

11. INTERNAL ALTERATION: The Tenant shall not make any structural alterations without written consent of the Landlord.

12. TERMINATION OF THE LEASE:
    a) In event of material breach by either party.
    b) Default of payment for continuous period of ${format(data.defaultPeriod, '2')} months.
    c) Either party may terminate with ${format(data.noticePeriod)} month(s) prior notice.
    
Post notice, the Tenant will permit prospective tenants to inspect the premises.

This agreement shall stand terminated on:
a) Expiry owing to passage of time.
b) If premises is destroyed or severely damaged.

13. HANDING OVER: On expiry, the Tenant shall deliver peaceful vacant possession in original condition with reasonable wear and tear.

Penalty for non-vacation:
(a) Twice the monthly rent for first two months
(b) Four times the monthly rent thereafter

14. ITEMS/UTILITIES LIST:
${data.fittings && data.fittings.length > 0 ? data.fittings.join(', ') : 'No fittings specified'}

15. GOVERNING LAW: This Agreement shall be governed by Indian Laws. Parties submit to jurisdiction of Courts in ${format(data.state)}.

16. STAMP DUTY: Stamp duty and registration charges shall be borne by ${format(data.stampDutyBy, 'Landlord')}.

17. MISCELLANEOUS:
17.1 FORCE MAJEURE: If the performance by either of the party of any of its obligations hereunder is prevented, restricted or interfered with by reason of flood, draught, fire, cyclone, earthquake or any other natural calamity, situation of war etc., or due to any irresistible forces beyond the control of parties (each such event shall be called as “Force Majeure” event), then such party shall be excused from such performance to the extent of such prevention, restriction or interference.
17.2 SEVERABILITY: If any term of this rental agreement is adjudicated to be unenforceable, invalid or illegal by a tribunal or court of competent jurisdiction, such adjudication shall not affect any other term of this Rental Agreement. The remainder of the Rental Agreement shall continue to be in force and the respective rights and obligations of the parties shall be construed, enforced and adjusted accordingly. The parties shall modify the unenforceable, invalid or illegal term to reflect the parties’ original intent, to the extent legally possible.
17.3 WAIVER: The failure of any party at any time to require performance of any term of or retort to any remedy provided under this Rental Agreement shall not be construed as waiver of any such terms or relinquishment of any such rights but the same shall continue in full force and effect. No waiver shall be effective unless in writing and duly executed by the concerned party.
17.4 RENEWAL: The Tenant at its own volition shall be entitled to renew the rental agreement in respect of the Demised Premises as agreed between the parties for further period before the expiry of the agreement. Such renewal shall be done by entering into a fresh Agreement on mutually agreed terms and conditions. The Tenant, if desirous of extending the rental agreement shall give at least sixty 60 days in advance, written communication prior to the expiry of the tenancy period.
17.5 LOCK IN PERIOD:This Rental Agreement shall have a lock in period of ${format(data.lockInPeriod, '3')} (Please mention the number of months example: 3 months, 4 months etc.) months before which termination of this agreement is not possible by either of the parties and if either party terminates this rental agreement during the lock in period, then the same shall pay a sum equal to three months of rent as specified in this agreement to the other party.
17.6 AMENDMENT OR MODIFICATION: This rental agreement shall not be modified, altered or amended in any manner except by an instrument in writing executed by the parties.
17.7 NOTICE/INTIMATION NOTE: Any Notice/ Intimation note intended to be given by the Tenant to the Landlord shall be deemed to be sufficiently given if the Tenant gives the said notice through general/ normal/ordinary mode of communication, which includes any form or means of communication i.e. through Registered post delivered or sent to the Landlord at its above-mentioned residential address, Note, telecommunication or any electronic means in general usage or in the manner provided in sub-section (4) of section 106 of the Transfer of Property Act, 1882.
Similarly, any notice intended to be given by the Landlord to the Tenant shall be deemed to be sufficiently given if the Landlord gives the said notice through general/ normal/ordinary mode of communication, which includes any form or means of communication i.e. through Registered post delivered or sent to the Tenant at the above-mentioned address of the Rented Property, Note, telecommunication or any electronic means in general usage or in the manner provided in sub-section (4) of section 106 of the Transfer of Property Act, 1882. 
.
 RENT INCREMENT: After expiry of tenure, rent shall be increased by ${format(data.rentIncrement)}%.

That both parties have read and understood all contents without any force or pressure.

IN WITNESS WHEREOF the Landlord and Tenant have subscribed their hand at ${format(data.state)} on this ${format(data.commenceDate)}.`;
};



export const FlatgenerateAgreementText = (data) => {
  const format = (text, fallback = '____________') => text || fallback;
  
  return `FLAT RENTAL AGREEMENT

This Rent [Apartment/Flat] Agreement is executed at ${format(data.placeOfExecution)} on this ${format(data.agreementDate)}

BY AND BETWEEN:-

Mr. / Mrs. ${format(data.ownerName)} S/o D/o ${format(data.ownerRelation)} ${format(data.ownerRelatedName)}, aged about ${format(data.ownerAge)} years, Occ: ${format(data.ownerOccupation)}, Address: ${format(data.ownerAddress)}.

HEREINAFTER called the "Land Lord"/"Owner" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the ONE (First) PART.

AND:-

Mr. / Mrs. ${format(data.tenantName)} S/o D/o ${format(data.tenantRelation)} ${format(data.tenantRelatedName)}, aged about ${format(data.tenantAge)} years, Occ: ${format(data.tenantOccupation)}, Address: ${format(data.tenantAddress)}.

HEREINAFTER called the "Tenant" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the OTHER (Second) PART.

WHEREAS the "Land Lord" is the absolute owner and possessed or otherwise well and sufficiently entitled to the Flat Residential Property (hereinafter called as the "Residential Property" or "Demised Premises" for the sake of brevity)

Demised Premises: ${format(data.propertyAddress)}, ${format(data.propertyArea)} (admeasuring approximately Area in Sqft), ${format(data.propertyPincode)}, City ${format(data.propertyCity)}, ${format(data.state)}, India. ${format(data.propertySpecifications)}

AND WHEREAS at the request of Tenant, the LANDLORD has hereby agreed to let out the above mentioned Demised Premises, to the Tenant on Rental (Month) basis and the LANDLORD has agreed for the same On the following agreed terms and conditions for Letting out the above mentioned Demised premises.

The Landlord and the Tenant are individually referred to as "Party" and collectively as the "Parties".

AND WHEREAS it was mutually considered expedient to reduce the said terms and conditions into writing

NOW THIS INDENTURE WITNESSETH the Rent Agreement between the Parties there to as follows:

That in consideration of the rent hereby reserved and of the terms, conditions and covenants of this Rental Agreement herein contained and on the part of the respective parties to be observed and performed.

1. DURATION:- The Landlord hereby agrees to grant and the Tenant hereby agrees to accept this Rent Agreement of the Demised Premises for a period of ${format(data.duration)} Months only commencing from ${format(data.commenceDate)} to ${format(data.endDate)} both days inclusive on the terms and conditions hereinafter contained.

2. NATURE OF USE PERMITTED: The Tenant shall not use or permit the use of the Demised Premises for any other activity/purpose other than the purpose of this agreement (${format(data.purpose, 'Residential')} purpose only) and shall abide by all the bye-laws, rules and regulation, of the local authorities in respect of the Demised Premises and shall not do any illegal activities in the said Demised Premises.

3. RENT:- The rent payable per month by the Tenant for the Demised Premises shall be Rs. ${format(data.monthlyRent)} (${format(data.monthlyRentWords)})/-per month (being in terms of English calendar months) excluding other charges. The rent is payable by way of ${format(data.paymentMode, 'Bank Transfer')} on or before ${format(data.rentPayDay)} of every month.
   (A) Landlord or his Agent shall, on receipt of payment towards rent and other charges payable within the stipulated period as in this tenancy agreement from the Tenant, provide forthwith against acknowledgement, a duly signed receipt for the amount received by him.
   (B) The Tenant, if applicable, shall pay to the relevant authority, the monthly maintenance charges, ${format(data.maintenanceCharges)} ${format(data.otherCharges)} for the Demised Premises.
   (C) Provided that where the payment of rent or other charges is made by the Tenant to the landlord through electronic mode, the bank acknowledgment thereof shall be conclusive proof of such payment.

4. SECURITY DEPOSIT:- The Tenant has paid a sum of Rs. ${format(data.securityDeposit)}/- (${format(data.securityDepositWords)}) to the Landlord being the Security Deposit towards the Rental Agreement of the Demised Premises. The Security deposited is paid through ${format(data.paymentMethod)}.

${data.ddNumber ? `Demand Draft Details:
DD No: ${format(data.ddNumber)}
Date: ${format(data.ddDate)}
Bank: ${format(data.bankName)}` : ''}

The deposit is intended to be a deposit for the due compliance by the Tenant of its obligations hereunder. The said amount shall be held by the Landlord as security deposit during the continuance of this Rent Agreement and shall be fully refunded only to the Tenant (vide draft, cheque or any such means), free of interest, subject to the handing over the Demised Premises, at the time of delivery of the vacant possession of the Demised Premises by the Tenant to the Landlord, on termination of this Rental Agreement or on sooner determination subject to deduction of any arrears of rent, damages to the Demised Premises.

In case the Landlord fails to refund the security deposit to the Tenant on early termination or expiry of this Rent agreement, the Tenant is entitled to hold possession of the Rented premises, without payment of rent and/or any other charges whatsoever, till such time the Landlord refunds the security deposit to the Tenant.

If the landlord fails to make any refund, he shall be liable to pay simple interest to the tenant at ${format(data.interestRate, '2')}% monthly on the amount which he has omitted or failed to refund.

5. ELECTRICITY CHARGES: The Tenant shall pay directly to the concerned authority or building authorities, all electricity charges for the electricity and power consumed for Tenant's own use as per the actual meter reading of the meter provided exclusively for the Demised Premises. The Tenant should share the receipts with the Landlord on Request.

6. WATER CHARGES: The Tenant shall pay directly to the concerned authority or building authorities, Water charges for Tenant's own use as per the proportionate consumption of the meter exclusively for the Demised Premises. The Tenant should share the receipts with the Landlord on Request.

7. LANDLORD'S COVENANTS: That the Landlord hereby assures to the covenants with the Tenant that:
   A) The Landlord has the absolute right, title, interest ownership of the Demised Premises and is competent to lease the same to the Tenant and that there is no impediment or restriction which prevents the Landlord from executing this rental agreement or carrying out its obligations hereunder.
   B) The Demised Premises can be legally used and occupied by the Tenant for residential purposes from the agreement commencement date.
   C) The Tenant paying the rent herein reserved and observing and performing the terms and conditions on the part of the Tenant as herein contained, shall be entitled to peaceful and quiet enjoyment of the Demised Premises during the period of this Rent, free from any interference, interruption, or objection whatsoever from the Landlord or any person or persons claiming through or under or in trust for the Landlord or otherwise subject to the observance of the terms and conditions agreed and mentioned herein.
   D) The Landlord shall indemnify and keep the Tenant fully indemnified and held harmless from and against all damages, costs and expenses caused to or incurred by the Tenant as result of any defect in the title of the Landlord which disturbs or interferes with the possession and enjoyment of the Demised Premises by the Tenant under the covenants herein before contained.
   E) The Landlord also covenants that it has not entered into any Memorandum of Understanding, letter of intent, agreement or transaction with any third party with respect to the Demised Premises and there is no pending or threatened litigation in respect of the Demised Premises which would in any way affect the rights of the Tenant hereunder.
   F) The Landlord represents that he has complied with all the statutory payments of the property including that of taxes, penalties if any and statutory dues to the local authority including but not limited to municipality, village panchayat, development authority, department of electricity, sewage and/or water.
   G) The landlord also covenants that the Demised Premises and every part thereof is free from all encumbrances like but no limited to sale, prior agreement of sale, gift, mortgage, past or present litigation, acquisition, attachment in a decree of any court, court injunction, lease agreement, license/user agreement, arrangement.

8. TENANT'S COVENANTS: The Tenants hereby agrees with the Landlord as follows:
   (a) Not to intentionally or negligently damage the Demised Premises or permit such damage.
   (b) To pay all water, electricity and other charges for utilities consumed in the Demised Premises from the commencement date of this agreement at actuals as per the bills raised by the concerned authorities.
   (c) Take reasonable care of the premises and its contents including fitting and fixtures and keep it reasonably habitable having regard to its condition at the commencement of tenancy and the normal incidence of living.
   (d) To permit the Landlord and their representatives, agents during the tenancy at any reasonable time in the day for inspection/general checking or to carry out the repair work of the Demised Premises with an advance notice/intimation note.
   (e) The Tenant shall not do or suffer to be done anything to other occupants or to prejudice the rights of the Landlord as the Owner of the said property.
   (f) The Tenants shall always keep the Demised Premises in proper condition and shall not cause or suffer any damage to the same only reasonable wear and tear is expected.
   (g) The Tenant shall not place or keep or permit to be placed or kept on the Demised Premises any offensive, dangerous or highly inflammable or explosive material or any other article or things which may constitute a danger, nuisance or annoyance to the demised or surrounding premises or the owners or occupiers thereof.
   (h) The Tenant shall carry on all day to day minor repairs at its own cost.

9. DIVISION OF MAINTENANCE RESPONSIBILITY BETWEEN THE LANDLORD AND THE TENANT:-
   (1) The landlord and the tenant shall keep the demised premises in as good a condition as at the commencement of the tenancy, except for normal wear and tear, and shall respectively be responsible to repair and maintain the said premises as specified in the schedule below and as agreed to in this tenancy agreement.
   
   (2) In case of common facilities shared among the Tenant or with the Landlord, the respective responsibilities of the Tenant and Landlord to repair and maintain those facilities shall be such as specified in this rental agreement.
   
   (3) If the Tenant fails or refuses to carry out the repairs referred to in sub-clause (1) or sub-clause (2), the Landlord may carry out the repairs and deduct the amount incurred for such repairs from the security deposit and the amount so deducted shall be paid by the Tenant within a period of one month of issue of notice by the Landlord in that regard:
   Provided that if the cost for such repairs exceed the security deposit, the Tenant shall be liable to pay the excess cost including the security deposit so deducted to the Landlord within a period of one month of the issue of notice by the Landlord in that regard.
   
   (4) In case the Landlord refuses to carry out the repairs referred to in sub-clause (1) or sub-clause (2), the Tenant may carry out such repairs and deduct the expenditure incurred towards the same from the rent to be paid for the succeeding months.
   
   (5) Where the premises is uninhabitable without the repairs and the landlord refuses to carry out the required repairs, after being called upon by the Tenant in writing to do so, the Tenant may vacate the premises after giving one month notice in writing to the Landlord.
   
   (6) Where the premises let out on rent becomes uninhabitable for the Tenant due to an event of force majeure or the Tenant is unable to reside due to occurrence of such event, the Landlord shall not charge rent from the Tenant until the said premises is restored by the repair and maintenance of property by the Landlord, subject to the provisions of this clause, to be inhabitable.
   Provided that where the rented premises becomes uninhabitable as specified in sub-clause (5) or this sub-clause and the landlord fails to carry out the required repairs to make it inhabitable or the said premises could not be made inhabitable, then, the security deposit and advance rent shall be refunded by the Landlord to the Tenant within a period of one month of the expiry of the notice period, after making due deduction of liability of the Tenant, if any.

SCHEDULE:-
The Landlord shall be responsible for repairs relating to matters falling under Part A and the tenant shall be responsible for matters falling under Part B.

PART A: Responsibilities of the Landlord
1. Structural repairs except those necessitated by damage caused by the tenant.
2. Whitewashing of walls and painting of doors and windows.
3. Changing and plumbing pipes when necessary.
4. Internal and external electrical wiring and related maintenance when necessary.
${format(data.landlordResponsibilities, '')}

PART B: Periodic repairs to be got done by the tenant
1. Changing of tap washers and taps.
2. Drain cleaning.
3. Water closet repairs.
4. Wash Basin repairs.
5. Bath tub repairs.
6. Geyser repairs.
7. Circuit breaker repairs
8. Switches and socket repairs.
9. Repairs and replacement of electrical equipment except major internal and external wiring changes.
10. Kitchen fixtures repairs.
11. Replacement of knobs and locks of doors, cupboard, windows etc.
12. Replacement of fly-nets.
13. Replacement of glass panels in windows, doors etc.
14. Maintenance of gardens and open spaces let out to or used by the tenant.
${format(data.tenantResponsibilities, '')}

10. SUB-LET:- That the Tenant shall not sub-let, transfer, assign any part of the above mentioned Demised Premises to anyone else (Person(s)/firm(s)/company(s)) under any circumstances without the prior written consent or by entering into a supplementary agreement to the existing tenancy agreement and approval of the Landlord.

11. INTERNAL ALTERATION:- The Tenant shall not make any additions, variations or alterations of structural nature in the rented property or any part thereof without first obtaining the consent, in writing, of the Landlord, provided that while erecting or dismantling the alterations the Tenant shall take due care of not damaging the main structure. Any damage caused shall be made good to the full satisfaction of the Landlord.

The Tenant at its own cost shall make any extra electrical fittings in addition to the fittings provided by the Landlord in respect of the Demised Premises, if Landlord consents to do so and the Landlord shall not be obliged to provide the same. The Tenant shall, however, be at liberty to remove and take away such of the fittings installed by it in the Demised Premises. The Tenant shall, however, take adequate care to ensure that no damage is caused to the Demised Premises or to the electrical fittings, electrical wiring while removing such additional fittings.

12. TERMINATION OF THE AGREEMENT: The Rental Agreement shall be terminated, Tenant shall be deemed as unlawful occupier of the Demised Premises and shall be liable for eviction proceedings and upon such termination, the Landlord or his authorized representatives, agents shall be at liberty to enter upon the rented premises and claim possession thereof, and the Tenant shall remove himself with all his belongings from the Demised Premises and shall hand over quiet peaceful and vacant occupation of the Demised Premises to the Landlord, under all or any of the following circumstances, namely:

   a) In the event of material breach by either party of the terms, conditions and covenants hereof.
   
   b) In case the Tenant is in default of payment of monthly rent for a continuous period of ${format(data.defaultPeriod, '2')} months, the Landlord shall issue a demand notice or rectification notice to the Tenant, calling upon the Tenant to rectify the default within a period of 30 days. In the event, the Tenant fails to rectify the default and remit the payment, the Landlord may terminate the agreement by issuing a notice in writing to the Tenant.
   
   c) If the Tenant would like to terminate the Rental Agreement, the Tenant should provide at least ${format(data.noticePeriod, 'One')} month prior/advance notice to Landlord. Similarly if Landlord would like to terminate the Rental Agreement, the Landlord should provide at least ${format(data.noticePeriod, 'One')} month prior/advance notice to Tenant.
   
Post the serving of the notice, the Tenant will permit the Landlord and their representatives, persons, agents, etc. to bring prospective tenants and buyers to inspect the Demised Premises at all reasonable hours in the day with an advance notice and Tenant on its part will vacate the property and give its full possession after the notice period of one month notice period, to Landlord.

This Rental Agreement shall stand terminated under the following ordinary circumstances:
   a) On expiry of this Rental Agreement owing to passage of time.
   b) That if the Demised Premises or any part of it is destroyed or severely damaged due to unforeseen circumstances, or civil commotion or act of God and these damages be not restored to by the Landlord within the reasonable time or if the Demised Premises is acquired compulsorily by any authority.

13. HANDING OVER THE DEMISED PREMISES: On expiry of the term of this Rental Agreement or on earlier determination of the same, the Tenant shall forthwith remove itself and its respective belongings, articles and things and must deliver peaceful vacant possession of the Demised Premises to the Landlord in the same original condition in which it was let out to the Tenant only with reasonable wear and tear. Tenant shall indemnify the Landlord against any loss or damage that may be suffered by the Landlord due to the conduct of the Tenant, family members, servants, visitors, invitees and agent. Tenant undertakes, if such damage is caused to the Rented Property, to repair that along with the landlord to bring back the Rented Property to the original condition immediately.

As such damage due to the acts of god, riots or other civil commotion, war, enemy action and/or other cause not within the control of the Tenant, cannot be attributed to the Tenant.

Penalty clause for non-vacation- Where the Tenant fails to vacate the Demised Premises in accordance with the Tenancy agreement on the expiration of the period of tenancy or termination of tenancy by an order or notice then, such Tenant shall be liable to pay the landlord-
   (a) Twice the monthly rent for the first two months; and
   (b) Four times the monthly rent thereafter till the tenant continues to occupy the said premises.

14. ITEMS/UTILITIES LIST:
Fittings, Appliances and Furnishings:
${data.fittings && data.fittings.length > 0 ? data.fittings.map(item => `• ${item}`).join('\n') : 'No fittings/appliances specified'}

${format(data.additionalItems, '')}

15. GOVERNING LAW AND JURISDICTION: Notwithstanding anything herein before contained any difference, disputes or doubts arising irrespective of the interpretation thereof or in any manner covering the relationship between the Landlord and the Tenant concerning the terms, conditions and covenants hereof or arising here, then both the Tenant and Landlord at their discretion, shall refer the matter to a competent court of jurisdiction or be referred to arbitration or any mode of dispute resolution as permitted under law.

This Rental Agreement shall be governed exclusively by and interpreted enforced and construed in accordance with Indian Laws, the parties irrevocably submit to jurisdiction of the Courts in ${format(data.placeOfExecution)}, ${format(data.state)}, India.

16. STAMP DUTY AND REGISTRATION:
The stamp duty, registration charges or other fees or charges of any kind, whatsoever, pertaining to this rental agreement and execution thereof shall be borne by ${format(data.stampDutyBy, 'Landlord')}.

17. MISCELLANEOUS

17.1. FORCE MAJEURE: If the performance by either of the party of any of its obligations hereunder is prevented, restricted or interfered with by reason of flood, draught, fire, cyclone, earthquake or any other natural calamity, situation of war etc., or due to any irresistible forces beyond the control of parties (each such event shall be called as "Force Majeure" event), then such party shall be excused from such performance to the extent of such prevention, restriction or interference.

17.2. SEVERABILITY: If any term of this rental agreement is adjudicated to be unenforceable, invalid or illegal by a tribunal or court of competent jurisdiction, such adjudication shall not affect any other term of this Rental Agreement. The remainder of the Rental Agreement shall continue to be in force and the respective rights and obligations of the parties shall be construed, enforced and adjusted accordingly. The parties shall modify the unenforceable, invalid or illegal term to reflect the parties' original intent, to the extent legally possible.

17.3. WAIVER: The failure of any party at any time to require performance of any term of or retort to any remedy provided under this Rental Agreement shall not be construed as waiver of any such terms or relinquishment of any such rights but the same shall continue in full force and effect. No waiver shall be effective unless in writing and duly executed by the concerned party.

17.4. RENEWAL: The Tenant at its own volition shall be entitled to renew the rental agreement in respect of the Demised Premises as agreed between the parties for further period before the expiry of the agreement. Such renewal shall be done by entering into a fresh Agreement on mutually agreed terms and conditions. The Tenant, if desirous of extending the rental agreement shall give at least sixty 60 days in advance, written communication prior to the expiry of the tenancy period.

17.5. LOCK IN PERIOD: This Rental Agreement shall have a lock in period of ${format(data.lockInPeriod, '3')} months before which termination of this agreement is not possible by either of the parties and if either party terminates this rental agreement during the lock in period, then the same shall pay a sum equal to three months of rent as specified in this agreement to the other party.

17.6. AMENDMENT OR MODIFICATION: This rental agreement shall not be modified, altered or amended in any manner except by an instrument in writing executed by the parties.

17.7. NOTICE/INTIMATION NOTE: Any Notice/Intimation note intended to be given by the Tenant to the Landlord shall be deemed to be sufficiently given if the Tenant gives the said notice through general/normal/ordinary mode of communication, which includes any form or means of communication i.e. through Registered post delivered or sent to the Landlord at its above-mentioned residential address, Note, telecommunication or any electronic means in general usage or in the manner provided in sub-section (4) of section 106 of the Transfer of Property Act, 1882.

Similarly, any notice intended to be given by the Landlord to the Tenant shall be deemed to be sufficiently given if the Landlord gives the said notice through general/normal/ordinary mode of communication, which includes any form or means of communication i.e. through Registered post delivered or sent to the Tenant at the above-mentioned address of the Rented Property, Note, telecommunication or any electronic means in general usage or in the manner provided in sub-section (4) of section 106 of the Transfer of Property Act, 1882.

17.8. RENT INCREMENT: After expiry of tenure, rent shall be increased by ${format(data.rentIncrement, '0')}%.

That both the parties have read over and understood all the contents of this agreement and have signed the same without any force or pressure from any side.

IN WITNESS WHEREOF the Landlord and the Tenant have hereunto subscribed their hand at ${format(data.placeOfExecution)} on this the ${format(data.agreementDate)} year first above Mentioned in presents of the following Witnesses:


LANDLORD Details:-
Name: ${format(data.ownerName)}
Address: ${format(data.ownerAddress)}
PAN Card Number: ${format(data.ownerPAN)}
Aadhaar Card Number: ${format(data.ownerAadhaar)}
Contact Number: ${format(data.ownerContact)}
Signature / Thumb print: _______________


TENANT Details:-
Name: ${format(data.tenantName)}
Address: ${format(data.tenantAddress)}
PAN Card Number: ${format(data.tenantPAN)}
Aadhaar Card Number: ${format(data.tenantAadhaar)}
Contact Number: ${format(data.tenantContact)}
Signature / Thumb print: _______________


WITNESS (I) Details:-
Name: ${format(data.witness1Name)}
Address: ${format(data.witness1Address)}
PAN Card Number: ${format(data.witness1PAN)}
Aadhaar Card Number: ${format(data.witness1Aadhaar)}
Contact Number: ${format(data.witness1Contact)}
Signature / Thumb print: _______________


WITNESS (II) Details:-
Name: ${format(data.witness2Name)}
Address: ${format(data.witness2Address)}
PAN Card Number: ${format(data.witness2PAN)}
Aadhaar Card Number: ${format(data.witness2Aadhaar)}
Contact Number: ${format(data.witness2Contact)}
Signature / Thumb print: _______________
`;
};

// Add this function to your utils/DocumentData.js file

export const RoomgenerateAgreementText = (data) => {
  const format = (text, fallback = '____________') => text || fallback;
  
  return `ROOM RENTAL AGREEMENT

This Rent Agreement is executed at ${format(data.placeOfExecution)} on this ${format(data.agreementDate)}

BETWEEN:-

1. Mr. / Mrs. ${format(data.ownerName)}(Name of the Landlord) S/o D/o  ${format(data.ownerRelation)}(Father’s name),  ${format(data.ownerRelatedName)}, aged about ${format(data.ownerAge)} years, Occ: ${format(data.ownerOccupation)}, Address: ${format(data.ownerAddress)}.

HEREINAFTER called the "Land Lord" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the ONE (First) PART.

AND:-

2. Mr. / Mrs. ${format(data.tenantName)} ${format(data.tenantRelation)} ${format(data.tenantRelatedName)}, aged about ${format(data.tenantAge)} years, Occ: ${format(data.tenantOccupation)}, Address: ${format(data.tenantAddress)}.

HEREINAFTER called the "Tenant" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the OTHER (Second) PART.

WHEREAS the "Land Lord" is the absolute owner and possessed or otherwise well and sufficiently entitled to the Residential Property (hereinafter called as the "Residential Part" or "Rented Portion" for the sake of brevity)

Demised Premises: ${format(data.propertyAddress)}, ${format(data.propertyArea)} (admeasuring or approximately Area in Sqft), ${format(data.propertyCity)}, PIN Code ${format(data.propertyPincode)}, ${format(data.state)}, India. ${format(data.propertySpecifications)}

Whereas the LANDLORD has agreed to let out the above mentioned Rented Portion, to the Tenant on Rental (Month) basis and the LANDLORD has agreed for the same. On the following agreed terms and conditions for Letting out the above mentioned Rented Portion.

AND WHEREAS it was mutually considered expedient to reduce the said terms and conditions into writing

NOW THIS RENT AGREEMENT WITNESSETH AS UNDER:-

1. That this Rent Agreement is for a period of ${format(data.duration)} Months only commencing from ${format(data.commenceDate)} to ${format(data.endDate)} both days inclusive on the terms and conditions hereinafter contained.

2. That the rent payable per month by the Tenant for the Rented Portion shall be Rs. ${format(data.monthlyRent)}/- (${format(data.monthlyRentWords)}) per month (being in terms of English calendar months) excluding other charges. The rent is payable by way of ${format(data.paymentMode)} on or before ${format(data.rentPayDay)} of every month.

3. That the Tenant shall pay Electricity & Water charge as per the proportionate consumption of the meter to the relevant authority.

4. The Tenant shall pay a sum of Rs. ${format(data.securityDeposit)}/- (${format(data.securityDepositWords)}) to the Landlord being the Security Deposit towards the Rental Agreement of the Rented Portion.

5. That the Tenant can neither make addition/alteration in the above mentioned Rented Portion without the written consent of the Landlord, nor the Tenant can sublet part or assign any part of the rented portion to any person(s)/firm(s)/company(s).

6. That the Tenant shall not be entitled to make any structural changes in the Rented Portion except the installation of temporary decoration, wooden partition/ cabin, air – conditioners etc. without the prior consent of the Landlord.

7. That the Tenant shall carry on all day to day minor repairs at its own cost.

8. The Tenant, if applicable, shall share or partly pay the monthly maintenance charges, ${format(data.maintenanceCharges)} ${format(data.otherCharges)} for the Rented Portion and the time intervals determined to the relevant authority/association in the building from time to time. The outgoing payable by the Tenant shall be in addition to the rent hereinabove.

9. That the Tenant shall abide by all the bye - laws, rules and regulation, of the local authorities and shall not do any illegal activities in the said Rented Portion.

10. That the Tenant shall permit the Landlord or his Authorized agent to enter in to the said Rented Portion for inspection/general checking or to carry out the repair work, at any reasonable time with prior notice or intimation regarding the same.

11. That the Tenant shall keep the said Rented Portion in clean & hygienic condition and shall not do or causes to be done any act which may be a nuisance to other.

12. That this Agreement may be terminated before the expiry of this tenancy period by serving One month prior notice by either party for this intention.

13. That the Tenant shall use the above said Rented Portion for Residential Purpose Only.

14. That the Tenant Shall not store/keep any offensive, dangerous, explosive or highly Inflammable articles in the said Rented Portion and shall not use the same for any unlawful activities.

15. This Rental Agreement shall be governed exclusively by and interpreted enforced and construed in accordance with Indian Laws, the parties irrevocably submit to jurisdiction of the Indian Courts.

17. Utilities List:
Fittings, Appliances and Furnishings

${data.fittings && data.fittings.length > 0 ? data.fittings.map(item => `${item}`).join('\t\t') : 'No specific fittings mentioned'}

That both the parties have read over and understood all the contents of this agreement and have signed the same without any force or pressure from any side.

In WITNESS WHEREOF the Landlord and the Tenant have hereunto subscribed their hand at ${format(data.placeOfExecution)} on this the ${format(data.agreementDate)} year first above mentioned in present of the following Witnesses:


LANDLORD Details:-
Name: ${format(data.ownerName)}
Address: ${format(data.ownerAddress)}
PAN Card Number: ${format(data.ownerPan)}
Aadhaar Card Number: ${format(data.ownerAadhaar)}
Contact Number: ${format(data.ownerContact)}
Signature / Thump print: _______________


TENANT Details:-
Name: ${format(data.tenantName)}
Address: ${format(data.tenantAddress)}
PAN Card Number: ${format(data.tenantPan)}
Aadhaar Card Number: ${format(data.tenantAadhaar)}
Contact Number: ${format(data.tenantContact)}
Signature / Thump print: _______________


WITNESS (I) Details:-
Name: ${format(data.witness1Name)}
Address: ${format(data.witness1Address)}
PAN Card Number: ${format(data.witness1PAN)}
Aadhaar Card Number: ${format(data.witness1Aadhaar)}
Contact Number: ${format(data.witness1Contact)}
Signature / Thump print: _______________


WITNESS (II) Details:-
Name: ${format(data.witness2Name)}
Address: ${format(data.witness2Address)}
PAN Card Number: ${format(data.witness2PAN)}
Aadhaar Card Number: ${format(data.witness2Aadhaar)}
Contact Number: ${format(data.witness2Contact)}
Signature / Thump print: _______________
`;
};

export const FurnishedhousegenerateAgreementText = (data) => {
  const format = (text, fallback = '____________') => text || fallback;
  
  return `This Rent [Furnished Flat/Apartment] Agreement is executed at ${format(data.state)} on this ${format(data.commenceDate)}

BY AND BETWEEN:-

Mr. / Mrs. ${format(data.ownerName)} (Name of the Landlord) ${format(data.ownerRelation)} ${format(data.ownerRelatedName)}, aged about ${format(data.ownerAge)} years, Occ: ${format(data.ownerOccupation)}, Address: ${format(data.ownerAddress)}.

HEREINAFTER called the "Land Lord"/"Owner" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the ONE (First) PART.

AND:-

Mr. / Mrs. ${format(data.tenantName)} (Name of the Tenant) ${format(data.tenantRelation)} ${format(data.tenantRelatedName)}, aged about ${format(data.tenantAge)} years, Occ: ${format(data.tenantOccupation)}, Address: ${format(data.tenantAddress)}.

HEREINAFTER called the "Tenant" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the OTHER (Second) PART.

WHEREAS the "Land Lord" is the absolute owner and possessed or otherwise well and sufficiently entitled to the Furnished Flat Residential Property (hereinafter called as the "Residential Property" or "Demised Premises" for the sake of brevity)

Demised Premises: ${format(data.propertyAddress)}, (admeasuring or approximately Area in Sqft ${format(data.propertyArea)}), PIN Code ${format(data.propertyPincode)}, City ${format(data.propertyCity)}, ${format(data.state)}, India.

AND WHEREAS at the request of Tenant, the LANDLORD has hereby agreed to let out the above mentioned Demised Premises, to the Tenant on Rental (Month) basis and the LANDLORD has agreed for the same On the following agreed terms and conditions for Letting out the above mentioned Demised Premises.

The Landlord and the Tenant are individually referred to as "Party" and collectively as the "Parties".

AND WHEREAS it was mutually considered expedient to reduce the said terms and conditions into writing

NOW THIS INDENTURE WITNESSETH the Rent Agreement between the Parties there to as follows:

That in consideration of the rent hereby reserved and of the terms, conditions and covenants of this Rental Agreement herein contained and on the part of the respective parties to be observed and performed.

1. DURATION:- The Landlord hereby agrees to grant and the Tenant hereby agrees to accept this Rent Agreement of the Demised Premises for a period of ${format(data.duration)} Months only commencing from ${format(data.commenceDate)} to ${format(data.endDate)} both days inclusive on the terms and conditions hereinafter contained.

2. NATURE OF USE PERMITTED: The Tenant shall not use or permit the use of the Demised Premises for any other activity/purpose other than the purpose of this agreement (${format(data.purpose)} purpose only) and shall abide by all the bye-laws, rules and regulation, of the local authorities in respect of the Demised Premises and shall not do any illegal activities in the said Demised Premises.

3. RENT:- The rent payable per month by the Tenant for the Demised Premises shall be Rs. ${format(data.monthlyRent)}/- per month (being in terms of English calendar months) excluding other charges. The rent is payable by way of ${format(data.paymentMethod)} on or before ${format(data.rentPayDay)} of every month.
(A) Landlord or his Agent shall, on receipt of payment towards rent and other charges payable within the stipulated period as in this tenancy agreement from the Tenant, provide forthwith against acknowledgement, a duly signed receipt for the amount received by him.
(B) The Tenant, if applicable, shall pay to the relevant authority, the monthly maintenance charges, Rs. ${format(data.maintenanceCharges)}/- for the Demised Premises.
(C) Provided that where the payment of rent or other charges is made by the Tenant to the landlord through electronic mode, the bank acknowledgment thereof shall be conclusive proof of such payment.

4. SECURITY DEPOSIT:- The Tenant has paid a sum of Rs. ${format(data.securityDeposit)}/- to the Landlord being the Security Deposit towards the Rental Agreement of the Demised Premises. The Security deposited is paid through ${format(data.paymentMethod)}.

The deposit is intended to be a deposit for the due compliance by the Tenant of its obligations hereunder. The said amount shall be held by the Landlord as security deposit during the continuance of this Rent Agreement and shall be fully refunded only to the Tenant (vide draft, cheque or any such means), free of interest, subject to the handing over the Demised Premises, at the time of delivery of the vacant possession of the Demised Premises by the Tenant to the Landlord, on termination of this Rental Agreement or on sooner determination subject to deduction of any arrears of rent, damages to the Demised Premises.

In case the Landlord fails to refund the security deposit to the Tenant on early termination or expiry of this Rent agreement, the Tenant is entitled to hold possession of the Rented premises, without payment of rent and/or any other charges whatsoever, till such time the Landlord refunds the security deposit to the Tenant.

Addition- If the landlord fails to make any refund, he shall be liable to pay simple interest to the tenant at ${format(data.interestRate)}% monthly on the amount which he has omitted or failed to refund.

5. ELECTRICITY CHARGES: The Tenant shall pay directly to the concerned authority or building authorities, all electricity charges for the electricity and power consumed for Tenant's own use as per the actual meter reading of the meter provided exclusively for the Demised Premises. The Tenant should share the receipts with the Landlord on Request.

6. WATER CHARGES: The Tenant shall pay directly to the concerned authority or building authorities, Water charges for Tenant's own use as per the proportionate consumption of the meter exclusively for the Demised Premises. The Tenant should share the receipts with the Landlord on Request.

7. LANDLORD'S COVENANTS: That the Landlord hereby assures to the covenants with the Tenant that:
A) The Landlord has the absolute right, title, interest ownership of the Demised Premises and is competent to lease the same to the Tenant and that there is no impediment or restriction which prevents the Landlord from executing this rental agreement or carrying out its obligations hereunder.
B) The Demised Premises can be legally used and occupied by the Tenant for residential purposes from the agreement commencement date.
C) The Tenant paying the rent herein reserved and observing and performing the terms and conditions on the part of the Tenant as herein contained, shall be entitled to peaceful and quiet enjoyment of the Demised Premises during the period of this Rent, free from any interference, interruption, or objection whatsoever from the Landlord or any person or persons claiming through or under or in trust for the Landlord or otherwise subject to the observance of the terms and conditions agreed and mentioned herein.
D) The Landlord shall indemnify and keep the Tenant fully indemnified and held harmless from and against all damages, costs and expenses caused to or incurred by the Tenant as result of any defect in the title of the Landlord which disturbs or interferes with the possession and enjoyment of the Demised Premises by the Tenant under the covenants herein before contained.
E) The Landlord also covenants that it has not entered into any Memorandum of Understanding, letter of intent, agreement or transaction with any third party with respect to the Demised Premises and there is no pending or threatened litigation in respect of the Demised Premises which would in any way affect the rights of the Tenant hereunder.
F) The Landlord represents that he has complied with all the statutory payments of the property including that of taxes, penalties if any and statutory dues to the local authority including but not limited to municipality, village panchayat, development authority, department of electricity, sewage and/or water.
G) The landlord also covenants that the Demised Premises and every part thereof is free from all encumbrances like but no limited to sale, prior agreement of sale, gift, mortgage, past or present litigation, acquisition, attachment in a decree of any court, court injunction, lease agreement, license/user agreement, arrangement.

8. TENANT'S CONVENANTS: The Tenants hereby agrees with the Landlord as follows:
(a) Not to intentionally or negligently damage the Demised Premises or permit such damage.
(b) To pay all water, electricity and other charges for utilities consumed in the Demised Premises from the commencement date of this agreement at actuals as per the bills raised by the concerned authorities.
(c) Take reasonable care of the premises and its contents including fitting and fixtures and keep it reasonably habitable having regard to its condition at the commencement of tenancy and the normal incidence of living.
(d) To permit the Landlord and their representatives, agents during the tenancy at any reasonable time in the day for inspection/general checking or to carry out the repair work of the Demised Premises with an advance notice/intimation note.
(e) The Tenant shall not do or suffer to be done anything to other occupants or to prejudice the rights of the Landlord as the Owner of the said property.
(f) The Tenants shall always keep the Demised Premises in proper condition and shall not cause or suffer any damage to the same only reasonable wear and tear is expected.
(g) The Tenant shall not place or keep or permit to be placed or kept on the Demised Premises any offensive, dangerous or highly inflammable or explosive material or any other article or things which may constitute a danger, nuisance or annoyance to the demised or surrounding premises or the owners or occupiers thereof.

9. DIVISION OF MAINTENANCE RESPONSIBILITY BETWEEN THE LANDLORD AND THE TENANT:-
(1) The landlord and the tenant shall keep the demised premises in as good a condition as at the commencement of the tenancy, except for normal wear and tear, and shall respectively be responsible to repair and maintain the said premises as specified in the schedule below and as agreed to in this tenancy agreement.
(2) In case of common facilities shared among the Tenant or with the Landlord, the respective responsibilities of the Tenant and Landlord to repair and maintain those facilities shall be such as specified in this rental agreement.
(3) If the Tenant fails or refuses to carry out the repairs referred to in sub-clause (1) or sub-clause (2), the Landlord may carry out the repairs and deduct the amount incurred for such repairs from the security deposit and the amount so deducted shall be paid by the Tenant within a period of one month of issue of notice by the Landlord in that regard.
(4) In case the Landlord refuses to carry out the repairs referred to in sub-clause (1) or sub-clause (2), the Tenant may carry out such repairs and deduct the expenditure incurred towards the same from the rent to be paid for the succeeding months.
(5) Where the premises is uninhabitable without the repairs and the landlord refuses to carry out the required repairs, after being called upon by the Tenant in writing to do so, the Tenant may vacate the premises after giving one month notice in writing to the Landlord.

SCHEDULE:-
The Landlord shall be responsible for repairs relating to matters falling under Part A and the tenant shall be responsible for matters falling under Part B.

Part A: Responsibilities of the Landlord
1. Structural repairs except those necessitated by damage caused by the tenant.
2. Whitewashing of walls and painting of doors and windows.
3. Changing and plumbing pipes when necessary.
4. Internal and external electrical wiring and related maintenance when necessary.

PART B: Periodic repairs to be got done by the tenant
1. Changing of tap washers and taps.
2. Drain cleaning.
3. Water closet repairs.
4. Wash Basin repairs.
5. Bath tub repairs.
6. Geyser repairs.
7. Circuit breaker repairs
8. Switches and socket repairs.
9. Repairs and replacement of electrical equipment except major internal and external wiring changes.
10. Kitchen fixtures repairs.
11. Replacement of knobs and locks of doors, cupboard, windows etc.
12. Replacement of fly-nets.
13. Replacement of glass panels in windows, doors etc.
14. Maintenance of gardens and open spaces let out to or used by the tenant.

10. SUB-LET:- That the Tenant shall not sub-let, transfer, assign any part of the above mentioned Demised Premises to anyone else (Person(s)/firm(s)/company(s)) under any circumstances without the prior written consent or by entering into a supplementary agreement to the existing tenancy agreement and approval of the Landlord.

11. INTERNAL ALTERATION:- The Tenant shall not make any additions, variations or alterations of structural nature in the rented property or any part thereof without first obtaining the consent, in writing, of the Landlord, provided that while erecting or dismantling the alterations the Tenant shall take due care of not damaging the main structure. Any damage caused shall be made good to the full satisfaction of the Landlord.

The Tenant at its own cost shall make any extra electrical fittings in addition to the fittings provided by the Landlord in respect of the Demised Premises, if Landlord consents to do so and the Landlord shall not be obliged to provide the same. The Tenant shall, however, be at liberty to remove and take away such of the fittings installed by it in the Demised Premises. The Tenant shall, however, take adequate care to ensure that no damage is caused to the Demised Premises or to the electrical fittings, electrical wiring while removing such additional fittings.

12. TERMINATION OF THE AGREEMENT: The Rental Agreement shall be terminated, Tenant shall be deemed as unlawful occupier of the Demised Premises and shall be liable for eviction proceedings and upon such termination, the Landlord or his authorized representatives, agents shall be at liberty to enter upon the rented premises and claim possession thereof, and the Tenant shall remove himself with all his belongings from the Demised Premises and shall hand over quiet peaceful and vacant occupation of the Demised Premises to the Landlord, under all or any of the following circumstances, namely:
a) In the event of material breach by either party of the terms, conditions and covenants hereof.
b) In case the Tenant is in default of payment of monthly rent for a continuous period of ${format(data.defaultPeriod)} months, the Landlord shall issue a demand notice or rectification notice to the Tenant, calling upon the Tenant to rectify the default within a period of 30 days. In the event, the Tenant fails to rectify the default and remit the payment, the Landlord may terminate the agreement by issuing a notice in writing to the Tenant.
c) If the Tenant would like to terminate the Rental Agreement, the Tenant should provide at least ${format(data.noticePeriod)} month prior/advance notice to Landlord. Similarly if Landlord would like to terminate the Rental Agreement, the Landlord should provide at least ${format(data.noticePeriod)} month prior/advance notice to Tenant.

Post the serving of the notice, the Tenant will permit the Landlord and their representatives, persons, agents, etc. to bring prospective tenants and buyers to inspect the Demised Premises at all reasonable hours in the day with an advance notice and Tenant on its part will vacate the property and give its full possession after the notice period of one month notice period, to Landlord.

This Rental Agreement shall stand terminated under the following ordinary circumstances:
a) On expiry of this Rental Agreement owing to passage of time.
b) That if the Demised Premises or any part of it is destroyed or severely damaged due to unforeseen circumstances, or civil commotion or act of God and these damages be not restored to by the Landlord within the reasonable time or if the Demised Premises is acquired compulsorily by any authority.

13. HANDING OVER THE DEMISED PREMISES: On expiry of the term of this Rental Agreement or on earlier determination of the same, the Tenant shall forthwith remove itself and its respective belongings, articles and things and must deliver peaceful vacant possession of the Demised Premises to the Landlord in the same original condition in which it was let out to the Tenant only with reasonable wear and tear. Tenant shall indemnify the Landlord against any loss or damage that may be suffered by the Landlord due to the conduct of the Tenant, family members, servants, visitors, invitees and agent. Tenant undertakes, if such damage is caused to the Rented Property, to repair that along with the landlord to bring back the Rented Property to the original condition immediately.

As such damage due to the acts of god, riots or other civil commotion, war, enemy action and/or other cause not within the control of the Tenant, cannot be attributed to the Tenant.

Penalty clause for non-vacation- Where the Tenant fails to vacate the Demised Premises in accordance with the Tenancy agreement on the expiration of the period of tenancy or termination of tenancy by an order or notice then, such Tenant shall be liable to pay the landlord-
(a) Twice the monthly rent for the first two months; and
(b) Four times the monthly rent thereafter till the tenant continues to occupy the said premises.

14. ITEMS/UTILITIES LIST:
Fittings, Appliances and Furnishings

${data.fittings && data.fittings.length > 0 ? data.fittings.map(item => `${item}`).join('\t\t') : 'No specific fittings mentioned'}

15. GOVERNING LAW AND JURISDICTION: Notwithstanding anything herein before contained any difference, disputes or doubts arising irrespective of the interpretation thereof or in any manner covering the relationship between the Landlord and the Tenant concerning the terms, conditions and covenants hereof or arising here, then both the Tenant and Landlord at their discretion, shall refer the matter to a competent court of jurisdiction or be referred to arbitration or any mode of dispute resolution as permitted under law.

This Rental Agreement shall be governed exclusively by and interpreted enforced and construed in accordance with Indian Laws, the parties irrevocably submit to jurisdiction of the Courts in ${format(data.state)}, India.

16. STAMP DUTY AND REGISTRATION:
The stamp duty, registration charges or other fees or charges of any kind, whatsoever, pertaining to this rental agreement and execution thereof shall be borne by ${format(data.stampDutyBy)}.

17. MISCELLANEOUS

17.1. FORCE MAJEURE: If the performance by either of the party of any of its obligations hereunder is prevented, restricted or interfered with by reason of flood, draught, fire, cyclone, earthquake or any other natural calamity, situation of war etc., or due to any irresistible forces beyond the control of parties (each such event shall be called as "Force Majeure" event), then such party shall be excused from such performance to the extent of such prevention, restriction or interference.

17.2. SEVERABILITY: If any term of this rental agreement is adjudicated to be unenforceable, invalid or illegal by a tribunal or court of competent jurisdiction, such adjudication shall not affect any other term of this Rental Agreement. The remainder of the Rental Agreement shall continue to be in force and the respective rights and obligations of the parties shall be construed, enforced and adjusted accordingly.

17.3. WAIVER: The failure of any party at any time to require performance of any term of or retort to any remedy provided under this Rental Agreement shall not be construed as waiver of any such terms or relinquishment of any such rights but the same shall continue in full force and effect. No waiver shall be effective unless in writing and duly executed by the concerned party.

17.4. RENEWAL: The Tenant at its own volition shall be entitled to renew the rental agreement in respect of the Demised Premises as agreed between the parties for further period before the expiry of the agreement. Such renewal shall be done by entering into a fresh Agreement on mutually agreed terms and conditions. The Tenant, if desirous of extending the rental agreement shall give at least sixty 60 days in advance, written communication prior to the expiry of the tenancy period.

17.5. LOCK IN PERIOD: This Rental Agreement shall have a lock in period of ${format(data.lockInPeriod)} months before which termination of this agreement is not possible by either of the parties and if either party terminates this rental agreement during the lock in period, then the same shall pay a sum equal to three months of rent as specified in this agreement to the other party.

17.6. AMENDMENT OR MODIFICATION: This rental agreement shall not be modified, altered or amended in any manner except by an instrument in writing executed by the parties.

17.7. NOTICE/INTIMATION NOTE: Any Notice/Intimation note intended to be given by the Tenant to the Landlord shall be deemed to be sufficiently given if the Tenant gives the said notice through general/normal/ordinary mode of communication, which includes any form or means of communication i.e. through Registered post delivered or sent to the Landlord at its above-mentioned residential address, Note, telecommunication or any electronic means in general usage or in the manner provided in sub-section (4) of section 106 of the Transfer of Property Act, 1882.

Similarly, any notice intended to be given by the Landlord to the Tenant shall be deemed to be sufficiently given if the Landlord gives the said notice through general/normal/ordinary mode of communication, which includes any form or means of communication i.e. through Registered post delivered or sent to the Tenant at the above-mentioned address of the Rented Property, Note, telecommunication or any electronic means in general usage or in the manner provided in sub-section (4) of section 106 of the Transfer of Property Act, 1882.

That both the parties have read over and understood all the contents of this agreement and have signed the same without any force or pressure from any side.

In WITNESS WHEREOF the Landlord and the Tenant have hereunto subscribed their hand at ${format(data.state)} on this the ${format(data.commenceDate)} year first above Mentioned in presents of the following Witnesses:`;
};

export const FurnishedFlatgenerateAgreementText = (data) => {
  const format = (text, fallback = '____________') => text || fallback;
  
  return `This Rent [Furnished House] Agreement is executed at ${format(data.state)} on this ${format(data.commenceDate)}

BY AND BETWEEN:-

Mr. / Mrs. ${format(data.ownerName)} (Name of the Landlord) ${format(data.ownerRelation)} ${format(data.ownerRelatedName)}, aged about ${format(data.ownerAge)} years, Occ: ${format(data.ownerOccupation)}, Address: ${format(data.ownerAddress)}.

HEREINAFTER called the "Land Lord"/"Owner" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the ONE (First) PART.

AND:-

Mr. / Mrs. ${format(data.tenantName)} (Name of the Tenant) ${format(data.tenantRelation)} ${format(data.tenantRelatedName)}, aged about ${format(data.tenantAge)} years, Occ: ${format(data.tenantOccupation)}, Address: ${format(data.tenantAddress)}.

HEREINAFTER called the "Tenant" (which term unless repugnant to the context shall mean and include their heirs, executors, administrators, legal representatives and assigns etc.) of the OTHER (Second) PART.

WHEREAS the "Land Lord" is the absolute owner and possessed or otherwise well and sufficiently entitled to the Furnished Flat Residential Property (hereinafter called as the "Residential Property" or "Demised Premises" for the sake of brevity)

Demised Premises: ${format(data.propertyAddress)}, (admeasuring or approximately Area in Sqft ${format(data.propertyArea)}), PIN Code ${format(data.propertyPincode)}, City ${format(data.propertyCity)}, ${format(data.state)}, India.

AND WHEREAS at the request of Tenant, the LANDLORD has hereby agreed to let out the above mentioned Demised Premises, to the Tenant on Rental (Month) basis and the LANDLORD has agreed for the same On the following agreed terms and conditions for Letting out the above mentioned Demised Premises.

The Landlord and the Tenant are individually referred to as "Party" and collectively as the "Parties".

AND WHEREAS it was mutually considered expedient to reduce the said terms and conditions into writing

NOW THIS INDENTURE WITNESSETH the Rent Agreement between the Parties there to as follows:

That in consideration of the rent hereby reserved and of the terms, conditions and covenants of this Rental Agreement herein contained and on the part of the respective parties to be observed and performed.

1. DURATION:- The Landlord hereby agrees to grant and the Tenant hereby agrees to accept this Rent Agreement of the Demised Premises for a period of ${format(data.duration)} Months only commencing from ${format(data.commenceDate)} to ${format(data.endDate)} both days inclusive on the terms and conditions hereinafter contained.

2. NATURE OF USE PERMITTED: The Tenant shall not use or permit the use of the Demised Premises for any other activity/purpose other than the purpose of this agreement (${format(data.purpose)} purpose only) and shall abide by all the bye-laws, rules and regulation, of the local authorities in respect of the Demised Premises and shall not do any illegal activities in the said Demised Premises.

3. RENT:- The rent payable per month by the Tenant for the Demised Premises shall be Rs. ${format(data.monthlyRent)}/- per month (being in terms of English calendar months) excluding other charges. The rent is payable by way of ${format(data.paymentMethod)} on or before ${format(data.rentPayDay)} of every month.
(A) Landlord or his Agent shall, on receipt of payment towards rent and other charges payable within the stipulated period as in this tenancy agreement from the Tenant, provide forthwith against acknowledgement, a duly signed receipt for the amount received by him.
(B) The Tenant, if applicable, shall pay to the relevant authority, the monthly maintenance charges, Rs. ${format(data.maintenanceCharges)}/- for the Demised Premises.
(C) Provided that where the payment of rent or other charges is made by the Tenant to the landlord through electronic mode, the bank acknowledgment thereof shall be conclusive proof of such payment.

4. SECURITY DEPOSIT:- The Tenant has paid a sum of Rs. ${format(data.securityDeposit)}/- to the Landlord being the Security Deposit towards the Rental Agreement of the Demised Premises. The Security deposited is paid through ${format(data.paymentMethod)}.

The deposit is intended to be a deposit for the due compliance by the Tenant of its obligations hereunder. The said amount shall be held by the Landlord as security deposit during the continuance of this Rent Agreement and shall be fully refunded only to the Tenant (vide draft, cheque or any such means), free of interest, subject to the handing over the Demised Premises, at the time of delivery of the vacant possession of the Demised Premises by the Tenant to the Landlord, on termination of this Rental Agreement or on sooner determination subject to deduction of any arrears of rent, damages to the Demised Premises.

In case the Landlord fails to refund the security deposit to the Tenant on early termination or expiry of this Rent agreement, the Tenant is entitled to hold possession of the Rented premises, without payment of rent and/or any other charges whatsoever, till such time the Landlord refunds the security deposit to the Tenant.

Addition- If the landlord fails to make any refund, he shall be liable to pay simple interest to the tenant at ${format(data.interestRate)}% monthly on the amount which he has omitted or failed to refund.

5. ELECTRICITY CHARGES: The Tenant shall pay directly to the concerned authority or building authorities, all electricity charges for the electricity and power consumed for Tenant's own use as per the actual meter reading of the meter provided exclusively for the Demised Premises. The Tenant should share the receipts with the Landlord on Request.

6. WATER CHARGES: The Tenant shall pay directly to the concerned authority or building authorities, Water charges for Tenant's own use as per the proportionate consumption of the meter exclusively for the Demised Premises. The Tenant should share the receipts with the Landlord on Request.

7. LANDLORD'S COVENANTS: That the Landlord hereby assures to the covenants with the Tenant that:
A) The Landlord has the absolute right, title, interest ownership of the Demised Premises and is competent to lease the same to the Tenant and that there is no impediment or restriction which prevents the Landlord from executing this rental agreement or carrying out its obligations hereunder.
B) The Demised Premises can be legally used and occupied by the Tenant for residential purposes from the agreement commencement date.
C) The Tenant paying the rent herein reserved and observing and performing the terms and conditions on the part of the Tenant as herein contained, shall be entitled to peaceful and quiet enjoyment of the Demised Premises during the period of this Rent, free from any interference, interruption, or objection whatsoever from the Landlord or any person or persons claiming through or under or in trust for the Landlord or otherwise subject to the observance of the terms and conditions agreed and mentioned herein.
D) The Landlord shall indemnify and keep the Tenant fully indemnified and held harmless from and against all damages, costs and expenses caused to or incurred by the Tenant as result of any defect in the title of the Landlord which disturbs or interferes with the possession and enjoyment of the Demised Premises by the Tenant under the covenants herein before contained.
E) The Landlord also covenants that it has not entered into any Memorandum of Understanding, letter of intent, agreement or transaction with any third party with respect to the Demised Premises and there is no pending or threatened litigation in respect of the Demised Premises which would in any way affect the rights of the Tenant hereunder.
F) The Landlord represents that he has complied with all the statutory payments of the property including that of taxes, penalties if any and statutory dues to the local authority including but not limited to municipality, village panchayat, development authority, department of electricity, sewage and/or water.
G) The landlord also covenants that the Demised Premises and every part thereof is free from all encumbrances like but no limited to sale, prior agreement of sale, gift, mortgage, past or present litigation, acquisition, attachment in a decree of any court, court injunction, lease agreement, license/user agreement, arrangement.

8. TENANT'S CONVENANTS: The Tenants hereby agrees with the Landlord as follows:
(a) Not to intentionally or negligently damage the Demised Premises or permit such damage.
(b) To pay all water, electricity and other charges for utilities consumed in the Demised Premises from the commencement date of this agreement at actuals as per the bills raised by the concerned authorities.
(c) Take reasonable care of the premises and its contents including fitting and fixtures and keep it reasonably habitable having regard to its condition at the commencement of tenancy and the normal incidence of living.
(d) To permit the Landlord and their representatives, agents during the tenancy at any reasonable time in the day for inspection/general checking or to carry out the repair work of the Demised Premises with an advance notice/intimation note.
(e) The Tenant shall not do or suffer to be done anything to other occupants or to prejudice the rights of the Landlord as the Owner of the said property.
(f) The Tenants shall always keep the Demised Premises in proper condition and shall not cause or suffer any damage to the same only reasonable wear and tear is expected.
(g) The Tenant shall not place or keep or permit to be placed or kept on the Demised Premises any offensive, dangerous or highly inflammable or explosive material or any other article or things which may constitute a danger, nuisance or annoyance to the demised or surrounding premises or the owners or occupiers thereof.

9. DIVISION OF MAINTENANCE RESPONSIBILITY BETWEEN THE LANDLORD AND THE TENANT:-
(1) The landlord and the tenant shall keep the demised premises in as good a condition as at the commencement of the tenancy, except for normal wear and tear, and shall respectively be responsible to repair and maintain the said premises as specified in the schedule below and as agreed to in this tenancy agreement.
(2) In case of common facilities shared among the Tenant or with the Landlord, the respective responsibilities of the Tenant and Landlord to repair and maintain those facilities shall be such as specified in this rental agreement.
(3) If the Tenant fails or refuses to carry out the repairs referred to in sub-clause (1) or sub-clause (2), the Landlord may carry out the repairs and deduct the amount incurred for such repairs from the security deposit and the amount so deducted shall be paid by the Tenant within a period of one month of issue of notice by the Landlord in that regard.
(4) In case the Landlord refuses to carry out the repairs referred to in sub-clause (1) or sub-clause (2), the Tenant may carry out such repairs and deduct the expenditure incurred towards the same from the rent to be paid for the succeeding months.
(5) Where the premises is uninhabitable without the repairs and the landlord refuses to carry out the required repairs, after being called upon by the Tenant in writing to do so, the Tenant may vacate the premises after giving one month notice in writing to the Landlord.

SCHEDULE:-
The Landlord shall be responsible for repairs relating to matters falling under Part A and the tenant shall be responsible for matters falling under Part B.

Part A: Responsibilities of the Landlord
1. Structural repairs except those necessitated by damage caused by the tenant.
2. Whitewashing of walls and painting of doors and windows.
3. Changing and plumbing pipes when necessary.
4. Internal and external electrical wiring and related maintenance when necessary.

PART B: Periodic repairs to be got done by the tenant
1. Changing of tap washers and taps.
2. Drain cleaning.
3. Water closet repairs.
4. Wash Basin repairs.
5. Bath tub repairs.
6. Geyser repairs.
7. Circuit breaker repairs
8. Switches and socket repairs.
9. Repairs and replacement of electrical equipment except major internal and external wiring changes.
10. Kitchen fixtures repairs.
11. Replacement of knobs and locks of doors, cupboard, windows etc.
12. Replacement of fly-nets.
13. Replacement of glass panels in windows, doors etc.
14. Maintenance of gardens and open spaces let out to or used by the tenant.

10. SUB-LET:- That the Tenant shall not sub-let, transfer, assign any part of the above mentioned Demised Premises to anyone else (Person(s)/firm(s)/company(s)) under any circumstances without the prior written consent or by entering into a supplementary agreement to the existing tenancy agreement and approval of the Landlord.

11. INTERNAL ALTERATION:- The Tenant shall not make any additions, variations or alterations of structural nature in the rented property or any part thereof without first obtaining the consent, in writing, of the Landlord, provided that while erecting or dismantling the alterations the Tenant shall take due care of not damaging the main structure. Any damage caused shall be made good to the full satisfaction of the Landlord.

The Tenant at its own cost shall make any extra electrical fittings in addition to the fittings provided by the Landlord in respect of the Demised Premises, if Landlord consents to do so and the Landlord shall not be obliged to provide the same. The Tenant shall, however, be at liberty to remove and take away such of the fittings installed by it in the Demised Premises. The Tenant shall, however, take adequate care to ensure that no damage is caused to the Demised Premises or to the electrical fittings, electrical wiring while removing such additional fittings.

12. TERMINATION OF THE AGREEMENT: The Rental Agreement shall be terminated, Tenant shall be deemed as unlawful occupier of the Demised Premises and shall be liable for eviction proceedings and upon such termination, the Landlord or his authorized representatives, agents shall be at liberty to enter upon the rented premises and claim possession thereof, and the Tenant shall remove himself with all his belongings from the Demised Premises and shall hand over quiet peaceful and vacant occupation of the Demised Premises to the Landlord, under all or any of the following circumstances, namely:
a) In the event of material breach by either party of the terms, conditions and covenants hereof.
b) In case the Tenant is in default of payment of monthly rent for a continuous period of ${format(data.defaultPeriod)} months, the Landlord shall issue a demand notice or rectification notice to the Tenant, calling upon the Tenant to rectify the default within a period of 30 days. In the event, the Tenant fails to rectify the default and remit the payment, the Landlord may terminate the agreement by issuing a notice in writing to the Tenant.
c) If the Tenant would like to terminate the Rental Agreement, the Tenant should provide at least ${format(data.noticePeriod)} month prior/advance notice to Landlord. Similarly if Landlord would like to terminate the Rental Agreement, the Landlord should provide at least ${format(data.noticePeriod)} month prior/advance notice to Tenant.

Post the serving of the notice, the Tenant will permit the Landlord and their representatives, persons, agents, etc. to bring prospective tenants and buyers to inspect the Demised Premises at all reasonable hours in the day with an advance notice and Tenant on its part will vacate the property and give its full possession after the notice period of one month notice period, to Landlord.

This Rental Agreement shall stand terminated under the following ordinary circumstances:
a) On expiry of this Rental Agreement owing to passage of time.
b) That if the Demised Premises or any part of it is destroyed or severely damaged due to unforeseen circumstances, or civil commotion or act of God and these damages be not restored to by the Landlord within the reasonable time or if the Demised Premises is acquired compulsorily by any authority.

13. HANDING OVER THE DEMISED PREMISES: On expiry of the term of this Rental Agreement or on earlier determination of the same, the Tenant shall forthwith remove itself and its respective belongings, articles and things and must deliver peaceful vacant possession of the Demised Premises to the Landlord in the same original condition in which it was let out to the Tenant only with reasonable wear and tear. Tenant shall indemnify the Landlord against any loss or damage that may be suffered by the Landlord due to the conduct of the Tenant, family members, servants, visitors, invitees and agent. Tenant undertakes, if such damage is caused to the Rented Property, to repair that along with the landlord to bring back the Rented Property to the original condition immediately.

As such damage due to the acts of god, riots or other civil commotion, war, enemy action and/or other cause not within the control of the Tenant, cannot be attributed to the Tenant.

Penalty clause for non-vacation- Where the Tenant fails to vacate the Demised Premises in accordance with the Tenancy agreement on the expiration of the period of tenancy or termination of tenancy by an order or notice then, such Tenant shall be liable to pay the landlord-
(a) Twice the monthly rent for the first two months; and
(b) Four times the monthly rent thereafter till the tenant continues to occupy the said premises.

14. ITEMS/UTILITIES LIST:
Fittings, Appliances and Furnishings

${data.fittings && data.fittings.length > 0 ? data.fittings.map(item => `${item}`).join('\t\t') : 'No specific fittings mentioned'}

15. GOVERNING LAW AND JURISDICTION: Notwithstanding anything herein before contained any difference, disputes or doubts arising irrespective of the interpretation thereof or in any manner covering the relationship between the Landlord and the Tenant concerning the terms, conditions and covenants hereof or arising here, then both the Tenant and Landlord at their discretion, shall refer the matter to a competent court of jurisdiction or be referred to arbitration or any mode of dispute resolution as permitted under law.

This Rental Agreement shall be governed exclusively by and interpreted enforced and construed in accordance with Indian Laws, the parties irrevocably submit to jurisdiction of the Courts in ${format(data.state)}, India.

16. STAMP DUTY AND REGISTRATION:
The stamp duty, registration charges or other fees or charges of any kind, whatsoever, pertaining to this rental agreement and execution thereof shall be borne by ${format(data.stampDutyBy)}.

17. MISCELLANEOUS

17.1. FORCE MAJEURE: If the performance by either of the party of any of its obligations hereunder is prevented, restricted or interfered with by reason of flood, draught, fire, cyclone, earthquake or any other natural calamity, situation of war etc., or due to any irresistible forces beyond the control of parties (each such event shall be called as "Force Majeure" event), then such party shall be excused from such performance to the extent of such prevention, restriction or interference.

17.2. SEVERABILITY: If any term of this rental agreement is adjudicated to be unenforceable, invalid or illegal by a tribunal or court of competent jurisdiction, such adjudication shall not affect any other term of this Rental Agreement. The remainder of the Rental Agreement shall continue to be in force and the respective rights and obligations of the parties shall be construed, enforced and adjusted accordingly.

17.3. WAIVER: The failure of any party at any time to require performance of any term of or retort to any remedy provided under this Rental Agreement shall not be construed as waiver of any such terms or relinquishment of any such rights but the same shall continue in full force and effect. No waiver shall be effective unless in writing and duly executed by the concerned party.

17.4. RENEWAL: The Tenant at its own volition shall be entitled to renew the rental agreement in respect of the Demised Premises as agreed between the parties for further period before the expiry of the agreement. Such renewal shall be done by entering into a fresh Agreement on mutually agreed terms and conditions. The Tenant, if desirous of extending the rental agreement shall give at least sixty 60 days in advance, written communication prior to the expiry of the tenancy period.

17.5. LOCK IN PERIOD: This Rental Agreement shall have a lock in period of ${format(data.lockInPeriod)} months before which termination of this agreement is not possible by either of the parties and if either party terminates this rental agreement during the lock in period, then the same shall pay a sum equal to three months of rent as specified in this agreement to the other party.

17.6. AMENDMENT OR MODIFICATION: This rental agreement shall not be modified, altered or amended in any manner except by an instrument in writing executed by the parties.

17.7. NOTICE/INTIMATION NOTE: Any Notice/Intimation note intended to be given by the Tenant to the Landlord shall be deemed to be sufficiently given if the Tenant gives the said notice through general/normal/ordinary mode of communication, which includes any form or means of communication i.e. through Registered post delivered or sent to the Landlord at its above-mentioned residential address, Note, telecommunication or any electronic means in general usage or in the manner provided in sub-section (4) of section 106 of the Transfer of Property Act, 1882.

Similarly, any notice intended to be given by the Landlord to the Tenant shall be deemed to be sufficiently given if the Landlord gives the said notice through general/normal/ordinary mode of communication, which includes any form or means of communication i.e. through Registered post delivered or sent to the Tenant at the above-mentioned address of the Rented Property, Note, telecommunication or any electronic means in general usage or in the manner provided in sub-section (4) of section 106 of the Transfer of Property Act, 1882.

That both the parties have read over and understood all the contents of this agreement and have signed the same without any force or pressure from any side.

In WITNESS WHEREOF the Landlord and the Tenant have hereunto subscribed their hand at ${format(data.state)} on this the ${format(data.commenceDate)} year first above Mentioned in presents of the following Witnesses:`;
};