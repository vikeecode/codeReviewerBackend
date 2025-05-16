const aiService = require('../services/ai.service');
module.exports.getReview = async (req, res)=>{
 const code = req.body.code;

   if(!code) {
    return res.status(400).json({ error: 'Prompt is required' });
}
   try {
    console.log("Prompt received:", code);
    
    const response = await aiService(code);
    console.log("Response from AI:", response);
    if (!response) {
        return res.status(500).json({ error: 'Failed to generate content' });
    }
    // return res.status(200).json({ response });
    res.send(response);
   } catch (error) {
    console.error('Error generating content:', error);
    return res.status(500).json({ error: 'Internal server error' });
   }
}