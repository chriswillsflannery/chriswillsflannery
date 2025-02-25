import { HL } from "@/components/HorizontalLine";

export default function Subtitler() {
  return (
    <>
      <h1>{`You can just build an auto-subtitler`}</h1>
      <h3>{`And learn about how models handle audio in the process.`}</h3>

      <p>
        <a
          style={{ color: "coral" }}
          href="https://www.youtube.com/watch?v=vSCDWcVsfjI"
        >
          If you prefer watching/listening to reading, click me!
        </a>
      </p>

      <p>
        <a
          style={{ color: "darkcyan" }}
          href="https://github.com/chriswillsflannery/subtitler"
        >
          Check out the code here
        </a>
      </p>
      <HL />

      <article>
        <h3>{`I noticed while creating videos that the automatic subtitles which were being generated in tiktok were way better than the ones generated in instagram and I wanted to know why. The ones in instagram were pretty awful. Like not even close to correct. Completely unusable.`}</h3>

        <p>{`Later I actually realized that the reason why this was happening was that I had the configuration settings in both applications set to Spanish.`}</p>

        <p>{`So in instagram, what was happening was that the app was anticipating that I would be speaking in spanish, but since I was actually speaking in english, the subtitles were coming out crazy because, I guess, the app was actually using a single-language audio-to-text transcription model under the hood.`}</p>

        <p>{`And in instagram when you're generating the captions, it doesn't give you an option to change the language it bases the transcription on.`}</p>

        <p>{`This means that if you're a multilingual speaker like me, any time you want to record a video in the other language, you actually need to go into the app system settings and change the global language which hard resets the app.`}</p>

        <p>{`In comparison, in tiktok when you're generating the subtitles, it actually shows you an option in the UI to change the language, which I think is a really nice feature.`}</p>

        <p>{`So in general, I do think that tiktok is a little friendlier UI to multilingual speakers, which I guess makes sense since it's a Chinese app being used by English speakers.`}</p>

        <p>{`Someone can fact check me in the comments, but I heard that people in China don't even use tiktok? I don't know if that's true.`}</p>

        <p>{`Anyway, I'm willing to bet this very small feature was a very conscious product decision. And I think it was a good one!`}</p>

        <p>{`This whole process sent me down the rabbit hole of wondering why it might be preferable to use single language models for audio-to-text transcription rather than some kind of larger general purpose model which can do multi language.`}</p>

        <HL />

        <h2>{`About the Whitepaper`}</h2>

        <p>{`The answer(s) to the previous question are explored at length in the Google white paper Scaling Automatic Speech Recognition Beyond 100 Languages. Even though really some of the most groundbreaking stuff in the paper is all about how the team built a model which scales out to more than 100 languages, many of which are low in training resources, there's still a ton of interesting and useful information about how audio signals can be used, once they're converted into numerical vector representations.`}</p>

        <p>{`The authors of the paper talk about the development of this USM, the Universal Speech Model, which uses a three-stage training pipeline.`}</p>

        <p>{`First there's unsupervised pre-training, where the model's encoder is is trained on a huge unlabeled multilingual dataset, so in this case it's mostly youtube videos, and by unlabeled we just mean that we only have the raw audio with no text transcriptions.`}</p>

        <p>{`Next there's Multi Objective Supervised Pre-training, which uses a variety of different techniques using both unlabeled and labeled data,`}</p>

        <p>{`And then finally there's supervised fine-tuning, which is task-specific training for downstream applications.`}</p>

        <p>{`A big technical innovation here is the introduction of chunk-wise attention which helps with processing really long audio samples.`}</p>

        <p>{`Traditionally, an attention mechanism would degrade rapidly with long audio sequences because it's a ton of information to keep in context and you run up against compute constraints. What the researchers in this paper found is that they could get better results if they chunk the audio into 8 second groupings.`}</p>

        <p>{`When you do chunking with attention mechanisms, typically you might run up against a "boundary problem" where there could be accuracy issues at the edges of chunk boundaries because there's less context available at one side or the other.`}</p>

        <p>{`For example, if the chunk we're examining contains the audio "It was as if he went" and cuts off there, there might be some missing context that could help inform whether the word "went" is being used literally, like in "he went to the beach", or as a euphemism, like in "he went crazy".`}</p>

        <p>{`The authors of the paper never mention any degradation of quality after chunking, so from what I can tell, this doesn't seem to have had any measurable negative effect on the outcome.`}</p>

        <p>{`So the USM model achieves several notable results: great performance on multilingual ASR and speech-to-text translation tasks, better performance than OpenAI's Whisper while using only 1/7th of the quantity of labeled training data, and effective adaptation to new languages with minimal supervised data.`}</p>

        <p>{`One of the really interesting points here is that the authors were able to get really efficient results on many languages by deploying a single full-size multilingual model but fine-tuning the model with residual adaptors for specific languages which add only 2% additional parameters to the already-large model.`}</p>

        <p>{`So in summary: diverse unlabeled data is more practical for building usable ASR for low-resource languages than weakly labeled data, though domain-relevant labeled data is still optimal for maximizing performance in specific applications. More on this later. Super cool stuff.`}</p>

        <p>{`The paper goes much, much more in depth on efficient transformer architectures for specific downstream tasks, attention and language-specific adaption mechanisms, and I will leave it up to the reader/listener to go check that out if it piques your interest.`}</p>

        <HL />

        <h2>{`About My Subtitler Project`}</h2>

        <p>{`Interestingly, this project was actually born out of an accident. Like I mentioned before, the reason why I became interested in figuring out how to automatically transcribe videos was due to a mistake, when I didn't realize that my application-wide language settings in instagram were actually affecting the quality of the audio to text transcription.`}</p>

        <p>{`Later, when I set the global language to english, the automatic transcriptions suddenly started doing a really great job of creating accurate subtitles. Go figure. That was was the secret sauce and I just made a silly mistake, although arguably, it wasn't obvious at the time.  Maybe an instagram feature, not necessarily a bug, just maybe something the product team hadn't thought through.`}</p>

        <p>{`Anyways, I got curious about the whole process so I built my own subtitler pipeline.`}</p>

        <p>{`High level, I wanted to be able to record a video on my phone and then drop it into a dropbox or some functional equivalent app on my phone, and then I should automatically get back out the same video, but just with subtitles added.`}</p>

        <p>{`So first I was thinking, alright, simple enough, I already use dropbox on my phone, I'll drop stuff into dropbox, and then have some kind of a listener hook into the dropbox directory and ping a lambda function when something changes.`}</p>

        <p>{`Now I've already been put through the ringer earlier this year in a similar project working with Sharepoint and Azure functions, and I know from that experience that there's a good chance that with a third-party storage site like dropbox, I might not be able to get a clean notification into lambda functions - basically what I found out with my sharepoint pipeline was that the only way you can do this is to hook into the sharepoint API for subscriptions, create a new subscription, and have that subscription ping Azure when something changes. But that ping about "when something changes" in your directory doesn't actually give you the details about what changed, just that SOMETHING changed.`}</p>

        <p>{`So when Azure gets the ping that SOMETHING changed, it needs to go back into the sharepoint directory and look through the files to figure out which file(s) have a newer timestamp than the last sync, and retrieve their contents.`}</p>

        <p>{`This whole back-and-forth messaging restriction is a huge pain in the ass, and I wanted to avoid that with my subtitler pipeline in AWS.`}</p>

        <p>{`So I figured, instead of dropbox where we'll likely run into a similar restriction as with sharepoint,  it would be much better to just dump files straight into s3 because I know that we can just use s3 notifications to directly pick up the changes. I've done this sort of thing before, I know with this pipeline you don't need to do this weird back and forth - you just get the information about the file that changed directly.`}</p>

        <p>{`So when you upload a video to the upload bucket in s3 (which by the way, you can do directly on mobile because there's a mobile s3 client app), this triggers the lambda function via an s3 event notification.`}</p>

        <p>{`The lambda function downloads the video file to temporary storage. Then when the file is in temporary storage we use FFmpeg to extract the audio layer as a 16khz mono-track wav file.`}</p>

        <p>{`Why these particular settings? in case anyone is interested. In the whitepaper I mentioned earlier, it seems like 16khz is the industry standard for working with spoken word - they even mention that all the audio samples they worked with were normalized to 16khz because it seems to be a sort of sweet spot where if you upsample a lower quality track, there ARE some audio artifacts introduced but not enough to actually matter in isolating the speech, and if you downsample a higher quality track, 16khz still gives you enough data to clearly pick out the nuances of spoken word.`}</p>

        <p>{`As for the wav format, wav is uncompressed which means you get, again, less noise artifacts, and better transcription accuracy. And mono just means we're working essentially with a single track, as opposed to stereo which is when you're listening to music and you hear different things in each ear. Stereo is great for music listening, but mono is fine for spoken word and makes the track less complex to process.`}</p>

        <p>{`FFmpeg is pretty much an industry standard for audio stuff with spoken word in particular. (Although if you're interested, there are some other products out there like Remotion that are trying to disrupt this space.) FFmpeg iss fast, it's simple to use with python, I've used it before with music stuff so I'm familiar with it. It's been battle tested for a long long time. I'm using it for both audio extraction and actually burning the subtitles onto the new video.`}</p>

        <p>{`So the wav file that gets extracted is automatically placed into an audio directory in the upload bucket. The lambda then takes the audio file and starts the transcription process using AWS Transcribe. Every time this process fires, it creates a unique job name containing a timestamp and UUID, and this is basically just to avoid an error you get in lambda where if you try to run a process multiple times with the same job name it fails. To be honest, I didn't really look too heavily into best practices around this, I just decided to skirt around the issue by automatically making sure each process was unique. Seems probably good enough for now.`}</p>

        <p>{`The lambda waits for the transcription to complete, which is usually done in a matter of milliseconds to seconds depending on the size of the originally uploaded video. It's pretty fast. And the nice thing about AWS transcribe is that in addition to the speech to text, it also provides timing information.`}</p>

        <p>{`Now to actually work with the timing information you need something called an SRT file. SRT is basically just a particular way of formatting text and and timestamps that a lot of different programs use, for example if you've ever used Premiere or any other professional video editing software you know that to add subtitles there's an option to import your own SRT files.`}</p>

        <p>{`Since AWS transcribe doesn't directly generate SRT, we have to take the JSON that it does provide us, and convert it. This is all possible because the outputted JSON has keys like start time and end time and pronunciation that we can use to make heads or tails of what the data we want to extract is.`}</p>

        <p>{`From there, like I mentioned earlier, we use FFmpeg again to "burn" these subtitles directly onto the video. We call this burning like how we used to burn music onto CDs because the text actually becomes a part of the video artifact itself, rather than like an overlay you might see on Youtube.`}</p>

        <p>{`Then the final video with burned subtitles gets uploaded to a different s3 bucket for processed videos, and we can download it from there.`}</p>

        <p>{`So the whole process is serverless, which is nice. As of the time I'm recording this video, I've run this process about 50 times, give or take, on videos with lengths ranging about 5 seconds to about 30 seconds and my forecasted cost for the month is only 13 cents. So the average cost per video transcription under 30 seconds is less than one cent.`}</p>

        <HL />

        <h2>{`What does AWS transcribe use under the hood?`}</h2>

        <p>{`I'm curious what AWS Transcribe actually uses under the hood. I've done some light digging and I can't actually find anything explicitly disclosed about what models they're using or how the audio gets filtered or anything, but based on the paper I mentioned earlier we can probably take a pretty good guess and say they're probably using a similar architecture to other ASR (Automatic Speech Recognition) systems.`}</p>

        <p>{`Most of these systems use a sequence-to-sequence model architecture which basically just means that we're converting from one type of sequence (numerical, text, characters, binary/booleans) to another. In this case the input sequence that we're converting FROM is a list of numbers representing sound waves over time. And the output sequence is a list of text, this text is the actual words which were spoken.`}</p>

        <p>{`One of the interesting things about this process is that the input and output sequences can be completely different lengths - for example, a 3 second audio clip represented by a fixed list size of numbers representing the sound waves, could become 5 words, or if the speaker is speaking quickly it could become 15 words.`}</p>

        <p>{`So the model architecture uses basically 3 components: an encoder, which processes the audio features into the list sequence of numbers representing the waveforms. Then a decoder, which converts the numbers into text. And there's also an attention mechanism which helps to align the audio and text as accurately as possible.`}</p>

        <p>{`When we're talking about attention in the context of audio transcription, again, we just mean that once the audio is transformed into vector data of numbers which represent wave forms, the attention mechanism is doing this kind of sliding window effect where it's figuring out which numbers are contextually relevant to group together to form words or pauses.`}</p>

        <p>{`Also, like what we saw in the paper, there's probably a massive set of training data, from sources like Youtube, some labeled data but probably mostly unlabeled data, all different languages, and a huge variety of stuff like different discussion topics, speakers with different accents, different background noise etc.`}</p>

        <p>{`As we saw in the paper, single language models almost always outperform multi language models, but there are certain scenarios that multi language models need to handle like scenarios where there is actually mixed language either via changing languages or changing dialects in the audio input.`}</p>

        <p>{`So it would be interesting to know how exactly AWS is handling this under the hood - like whether they’re using that same method of having a large multi language base model and then just including different single language adaptors where needed.`}</p>

        <HL />

        <h2>{`AWS transcribe can also use custom language models`}</h2>

        <p>{`One cool thing also worth mentioning is that when you're using AWS transcribe you don't have to use the default model - you can use custom language models which you train yourself - and the explanation given in the AWS documentation is that maybe at certain times you need certain vocabulary or grammatical structural understanding or code switching that differs from the norm.`}</p>

        <p>{`For example, if you're transcribing something which uses highly technical language you might want a model that is fine-tuned for that domain, like earth sciences, or medicine, or philosophy. This is one of the problems I've often run up against while making software engineering videos on tiktok and instagram. There have been a lot of instances where I'm talking about data structures and I say something about Queues, and the auto transcription spits out the letter "Q" rather than the full word.`}</p>

        <p>{`In this scenario, you may want a model which is fine tuned on software engineering discourse so that it can pick up on the surrounding context, and know that you're actually talking about a queue data structure rather than the letter "Q".`}</p>

        <p>{`This could be particularly helpful in my scenario since I'm just automatically burning the generated subtitles onto the new video - there isn't any review process to make sure the generated subtitles are actually accurate. More about this later.`}</p>

        <p>{`And by the way, if you have a large enough corpus of training material, the best thing to do in this case would be to just fine tune a model on your own content. Personally I think this is likely overkill, but it's an interesting thought experiment in pros and cons.`}</p>

        <p>{`I'm using the term "fine-tuned" here kind of loosely - when we create a custom language model here, it might actually be more useful to say something like coarsely-tuned. There's a dedicated API inside of AWS transcribe which lets you create a new language model and as parameters you can pass it additional text files as both training and tuning data - I'll link to the documentation below if you want to read more about that. Of course, in a really robust audio-to-text model, text data is just one component. There doesn't seem to be any way you can input your own audio data, whether labeled or unlabeled, for further training.`}</p>

        <HL />

        <h2>{`No Review Process Can Be a Good Thing`}</h2>

        <p>{`An interesting sidenote on whether you would want to actually include a review process for the subtitles somewhere in the loop, to make sure they're correct. Or even a counterpoint to why you might actually WANT your subtitles to be slightly "off". If you've been around the internet for a while, you know that a good deal of content out there is engagement bait. Some of it is really egregious clickbait slop.`}</p>

        <p>{`That's not really the stuff I want to make. Sure it can make a lot of money, but it just doesn't make me feel good. I genuinely want to help people learn via the technical videos I make.`}</p>

        <p>{`And I think there is an interesting sort of middle-ground here. It's possible to take a bit of what we can observe from looking at how engagement bait works, and apply it to actually useful content.`}</p>

        <p>{`For example, and of course I don't really have any hard data on this - it's purely anecdotal, but what I've noticed on my videos is that sometimes, if the subtitles are wrong at certain points, that gets people to comment. For example, if you say "computer" but the subtitle says "poop her", that gets more people to comment. When more people comment, your video gets shown to more people. And in theory, so on and so on. And in theory, if a video is genuinely useful or insightful, the more people it reaches, the better.`}</p>

        <p>{`There's definitely a counterpoint you could make like, well, when people make those types of comments, the algorithm shows your video to the wrong audience. That may be true. I'm not really thinking about it that deeply. It's just an observation.`}</p>

        <HL />

        <h2>{`Future plans for project?`}</h2>

        <p>{`Right now, the subtitles aren't actually getting burned onto the new video correctly, I still have to figure out how to get each individual text section from the SRT file to burn onto the new video as individual subtitles, because right now it's just getting burned on as one giant block of text.`}</p>

        <p>{`There's also some visible video quality degradation which I'm not sure whether that's a function of something to do with ffmpeg or something to do with the aws pipeline.`}</p>

        <p>{`And then of course there will be the matter of some styling to make the subtitles actually look pretty.`}</p>

        <p>{`That's where I'm at for now. More soon. Reading the whitepaper about audio stuff was interesting, especially because pure language stuff is really at the forefront of what everyone's talking about in AI ML circles right now, but it's an interesting side quest anyway.`}</p>
      </article>

      <HL />
    </>
  );
}
