<script lang="ts">
interface Props {
    swipeNext: () => false | void;
}
let { swipeNext }: Props = $props();

import Button from "$lib/components/ui/button/button.svelte";
import Textarea from "$lib/components/ui/textarea/textarea.svelte";
</script>

<div class="min-w-full snap-start flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold">Context and Objectives</h3>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>1.</strong> What is prompting this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button onclick={swipeNext} variant="outline">New Opportunity</Button>
        <Button onclick={swipeNext} variant="outline">Ongoing Partnership</Button>
        <Button onclick={swipeNext} variant="outline">Competitive Bid / Vendor Selection</Button>
        <Button onclick={swipeNext} variant="outline">Other</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>1.</strong> Please explain how you plan to achieve this objective.</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<!--

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>2.</strong> What specific aspects or topics make this opportunity or partnership worth discussing in negotiation?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>3.</strong> Is this a formal negotiation or an exploratory discussion?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Formal negotiation</Button>
        <Button variant="outline">Exploratory discussion</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>4.</strong> Are there any competitors involved in this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>5.</strong> What are your positions (specific demands or statements)?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>6.</strong> What are your primary objectives in this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Maximize Value (beyond just price)</Button>
        <Button variant="outline">Establish Partnership Terms</Button>
        <Button variant="outline">Reduce Costs</Button>
        <Button variant="outline">Secure Short-Term Wins</Button>
        <Button variant="outline">Define expectations</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>7.</strong> Do you have a history of past interactions with the counterpart?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>8.</strong> Are there any time constraints or deadlines affecting this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>9.</strong> Are there any legal or compliance considerations relevant to this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>10.</strong> Is price a critical factor in this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>11.</strong> If price is not a primary focus, what factors hold the most importance?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Quality</Button>
        <Button variant="outline">Delivery Speed</Button>
        <Button variant="outline">Delivery Speed</Button>
        <Button variant="outline">Innovation</Button>
        <Button variant="outline">Process Efficiency</Button>
        <Button variant="outline">Other</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>12.</strong> How would you assess your negotiation power relative to the counterpart?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">We have significantly more leverage</Button>
        <Button variant="outline">We have slightly more leverage</Button>
        <Button variant="outline">Leverage is balanced</Button>
        <Button variant="outline">They have slightly more leverage</Button>
        <Button variant="outline">They have significantly more leverage</Button>
    </div>
</div>

<div class="min-w-full snap-start flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold">Strengths and Weaknesses</h3>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>13.</strong> Where does your product/service fit in the Commodity Matrix?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        // TODO: Matrix
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>14.</strong> Are there any specific attributes of your offering that strengthen your position in this quadrant?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>15.</strong> What unique strengths or advantages do you bring to this negotiation?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>16.</strong> Are there any specific attributes of your offering that could potentially weaken your position in this quadrant?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>17.</strong> What are the primary risks you anticipate in this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Price Pressure</Button>
        <Button variant="outline">Contractual or Delivery Risks</Button>
        <Button variant="outline">Competitive Positioning Risks</Button>
        <Button variant="outline">Relationship Deterioration</Button>
        <Button variant="outline">Other</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>18.</strong> What concessions are you willing to make during the negotiation?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>19.</strong> What does a successful outcome look like for you?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>20.</strong> How will you measure the success of this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Quantitative Measures</Button>
        <Button variant="outline">Qualitative Measures</Button>
    </div>
</div>

<div class="min-w-full snap-start flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold">Stakeholders and Relationships</h3>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>21.</strong> Who are the primary parties involved in this negotiation?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>22.</strong> Can you identify other stakeholders who might influence or be affected by the negotiation outcome?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>23.</strong> What is your role and position relative to the counterpart?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>24.</strong> Is there a formal or informal hierarchy affecting this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>25.</strong> What are your preferred communication methods and channels?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">In-Person Meetings</Button>
        <Button variant="outline">Video Calls</Button>
        <Button variant="outline">Emails</Button>
        <Button variant="outline">Phone Calls</Button>
        <Button variant="outline">Messaging Apps</Button>
        <Button variant="outline">Other</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>25.</strong> Are there any cultural or language considerations to be aware of?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>26.</strong> Are there any emotional or cultural factors that might impact the negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold">Negotiation Strategy and Style</h3>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>27.</strong> Do you plan to build rapport with the counterpart?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>28.</strong> What techniques will you use to handle objections and foster a collaborative atmosphere?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>29.</strong> What negotiation style do you plan to adopt?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Competitive</Button>
        <Button variant="outline">Collaborative</Button>
        <Button variant="outline">Compromising</Button>
        <Button variant="outline">Avoiding</Button>
        <Button variant="outline">Accommodating</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>30.</strong> Can you identify potential barriers to reaching an agreement?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>31.</strong> Are you making any assumptions about the counterpart or the negotiation context?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>32.</strong> What expectations do you believe the other party has?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Cost Reduction</Button>
        <Button variant="outline">Extended Services</Button>
        <Button variant="outline">Process Improvements</Button>
        <Button variant="outline">Stability in Terms</Button>
        <Button variant="outline">Non-Monetary Interests</Button>
        <Button variant="outline">Other</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>33.</strong> Are there any competitors influencing the counterpart's expectations or offers?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>34.</strong> How would you describe the anticipated outcome if all goes as planned?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Long-Term Agreement</Button>
        <Button variant="outline">Short-Term Contract</Button>
        <Button variant="outline">Framework Agreement</Button>
        <Button variant="outline">One-Time Transaction</Button>
        <Button variant="outline">Elimination of Agreement</Button>
        <Button variant="outline">Other</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>35.</strong> Is your priority to achieve a long-term partnership or immediate results?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Long-Term Partnership</Button>
        <Button variant="outline">Immediate Results</Button>
        <Button variant="outline">Framework Agreement</Button>
        <Button variant="outline">Balanced Approach</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>36.</strong> What non-monetary interests are important to you in this negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Intellectual Property Rights</Button>
        <Button variant="outline">Exclusivity Agreements</Button>
        <Button variant="outline">Future Collaboration Opportunities</Button>
        <Button variant="outline">Brand Recognition</Button>
        <Button variant="outline">Corporate Social Responsibility</Button>
        <Button variant="outline">Other</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>37.</strong> How comfortable are you with managing emotions during the negotiation?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        // TODO: Scale
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>38.</strong> Are there potential emotional triggers you should be aware of for yourself or the counterpart?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>39.</strong> How will you address cultural differences to prevent misunderstandings?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start flex flex-col items-center justify-center">
    <h3 class="text-xl font-semibold">Interests and Risk Management</h3>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>40.</strong> What are your underlying interests in this negotiation (needs, desires)?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>41.</strong> Are you aware of the counterpart's interests and positions?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>42.</strong> Are there clear points where you and the counterpart are aligned?</p>
    <div class="w-full h-full flex flex-col gap-3 justify-center">
        <Button variant="outline">Yes</Button>
        <Button variant="outline">No</Button>
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>43.</strong> What is your BATNA if this negotiation does not result in an agreement?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>44.</strong> What do you believe is the counterpart's BATNA?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>45.</strong> What concessions do you expect or require from the counterpart?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

<div class="min-w-full snap-start carouse-elm">
    <p class="text-md"><strong>45.</strong> Are there any inconsistencies or points requiring clarification?</p>
    <div class="p-1">
        <Textarea />
    </div>
</div>

-->
