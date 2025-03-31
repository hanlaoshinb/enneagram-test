// 测试题目数据
const questions = [
    {
        id: 1,
        optionA: "私はよく完璧を追求し、自分の間違いを許しません",
        optionB: "私は人を助けることを好み、しばしば他人のニーズを自分より優先します"
    },
    {
        id: 2,
        optionA: "決断をする際、私はあらゆる可能性と詳細を考慮する傾向があります",
        optionB: "決断をする際、私は自分の感覚や直感に頼ることが多いです"
    },
    {
        id: 3,
        optionA: "私は認められること、褒められることを好みます",
        optionB: "私は自分の独立性と自律性をより重視します"
    },
    {
        id: 4,
        optionA: "私は美しさやユニークさに敏感で、感情に動かされやすいです",
        optionB: "私は知識を追求し、様々な概念や理論を理解することが好きです"
    },
    {
        id: 5,
        optionA: "私はよく最悪の事態が起こることを心配します",
        optionB: "私は物事が最終的には良い方向に向かうと楽観的に信じています"
    },
    {
        id: 6,
        optionA: "私は安全と確実性を求める傾向があります",
        optionB: "私は新しい体験や冒険を追求することが好きです"
    },
    {
        id: 7,
        optionA: "私は新しいことを試し、多様な生活体験を追求するのが好きです",
        optionB: "私はひとつの分野を深く掘り下げ、専門家になることを好みます"
    },
    {
        id: 8,
        optionA: "私は状況を主導する傾向があり、支配されることを好みません",
        optionB: "私は調和を維持し、対立を避けたいと思います"
    },
    {
        id: 9,
        optionA: "私は通常穏やかで、現状を受け入れます",
        optionB: "私は卓越を追求し、常に新しい目標を設定します"
    },
    {
        id: 10,
        optionA: "私は細部と秩序を重視します",
        optionB: "私は柔軟性と自発性を重視します"
    },
    {
        id: 11,
        optionA: "私はよく他人の問題解決を手伝います",
        optionB: "私は独立して考え、問題を解決することが好きです"
    },
    {
        id: 12,
        optionA: "私は様々な社交の場に適応するのが得意です",
        optionB: "私はよくエネルギーを回復するために一人の時間が必要です"
    },
    {
        id: 13,
        optionA: "私は自分が他と違うと感じやすく、主流に合わないことがあります",
        optionB: "私は集団に溶け込み、他人に受け入れられることを望みます"
    },
    {
        id: 14,
        optionA: "私は不確かさに不安を感じます",
        optionB: "私は未知を探索することにワクワクします"
    },
    {
        id: 15,
        optionA: "私は事前に計画を立てるのが好きで、急な変更は好みません",
        optionB: "私は臨機応変に対応し、選択肢を開いておくのが好きです"
    },
    {
        id: 16,
        optionA: "私は自分の限界に挑戦することを信じています",
        optionB: "私は快適な領域内で活動するのが好きです"
    },
    {
        id: 17,
        optionA: "私は自分の考えを直接表現することが多いです",
        optionB: "私は他人の感情を考慮してから表現する傾向があります"
    },
    {
        id: 18,
        optionA: "私は時々決断を先延ばしにしたり避けたりします",
        optionB: "私は通常素早く決断し行動します"
    },
    {
        id: 19,
        optionA: "私は批判に敏感です",
        optionB: "私は批判を客観的に見ることができます"
    },
    {
        id: 20,
        optionA: "私は通常、他人を励まし支援する人です",
        optionB: "私は通常、提案や解決策を提供する人です"
    },
    {
        id: 21,
        optionA: "私は競争や挑戦を好みます",
        optionB: "私は協力やチームワークを好みます"
    },
    {
        id: 22,
        optionA: "私はよく自分が他の人と違うと感じます",
        optionB: "私は周囲の環境と調和するよう努めます"
    },
    {
        id: 23,
        optionA: "私は分析し考えることが好きです",
        optionB: "私は行動し実践することが好きです"
    },
    {
        id: 24,
        optionA: "私は失敗や批判されることを恐れます",
        optionB: "私は自由を失うことや制限されることを恐れます"
    },
    {
        id: 25,
        optionA: "私は間違いがないよう何度も確認する習慣があります",
        optionB: "私は物事が自然に解決すると信じています"
    },
    {
        id: 26,
        optionA: "私はよく将来の可能性を考えます",
        optionB: "私は今この瞬間に生きる傾向があります"
    },
    {
        id: 27,
        optionA: "私はリーダーになることを望みます",
        optionB: "私はサポーターになることを望みます"
    },
    {
        id: 28,
        optionA: "私は平和と調和を重視します",
        optionB: "私は真実と誠実さを重視します"
    },
    {
        id: 29,
        optionA: "私は気が散りやすく、複数のアイデアを考えます",
        optionB: "私は一つの目標に集中し、完了するまで続けます"
    },
    {
        id: 30,
        optionA: "私は通常慎重で、結果を考慮します",
        optionB: "私はよくリスクを取り、刺激を楽しみます"
    },
    {
        id: 31,
        optionA: "私は達成と認識を追求します",
        optionB: "私は平穏と内なる平和を追求します"
    },
    {
        id: 32,
        optionA: "私はよく疑いや質問を持ちます",
        optionB: "私は信頼し受け入れる傾向があります"
    },
    {
        id: 33,
        optionA: "私は親密な感情的なつながりを築くのが好きです",
        optionB: "私はある程度の感情的な距離を保つ必要があります"
    },
    {
        id: 34,
        optionA: "私は実際的で現実的な人と見なされています",
        optionB: "私は想像力と創造性のある人と見なされています"
    },
    {
        id: 35,
        optionA: "私は整理された環境を好みます",
        optionB: "私は混沌とした中でも居心地よく感じられます"
    },
    {
        id: 36,
        optionA: "私は詳細と具体的な事実に注目します",
        optionB: "私は全体像と可能性に注目します"
    }
];

// 採点方法と各タイプの対応
const scoringKey = {
    "type1": ["1A", "10A", "15A", "19A", "25A", "35A"],
    "type2": ["1B", "11A", "17B", "20A", "27B", "33A"],
    "type3": ["3A", "12A", "18B", "21A", "31A", "34A"],
    "type4": ["4A", "13A", "22A", "28B", "33A", "34B"],
    "type5": ["4B", "12B", "23A", "29B", "32A", "36B"],
    "type6": ["5A", "6A", "14A", "24A", "30A", "32A"],
    "type7": ["5B", "7A", "14B", "24B", "26A", "29A"],
    "type8": ["8A", "17A", "21A", "27A", "30B", "32B"],
    "type9": ["8B", "9A", "18A", "28A", "31B", "32B"]
};

// エニアグラムタイプの詳細情報
const typeDetails = {
    "type1": {
        name: "完璧主義者",
        description: "正しさ、秩序、完璧さを追求し、強い内部批判基準を持っています。",
        famousPeople: "マハトマ・ガンジー、マザー・テレサ、アインシュタイン",
        temperament: "原則的で誠実、組織的で責任感が強い",
        loveTrait: "忠実で道徳的、相手に高い基準を求めることがある",
        suitableJobs: "教師、編集者、会計士、品質管理者",
        catchphrase: "もっと良くできるはず"
    },
    "type2": {
        name: "助言者",
        description: "人助けを好み、関係を重視し、必要とされ、感謝されることを望みます。",
        famousPeople: "マザー・テレサ、ダライ・ラマ、オプラ・ウィンフリー",
        temperament: "思いやりがあり、温かく、人に尽くす",
        loveTrait: "献身的で愛情深い、時に相手に依存しすぎることも",
        suitableJobs: "カウンセラー、看護師、教師、ソーシャルワーカー",
        catchphrase: "あなたのためなら何でもします"
    },
    "type3": {
        name: "達成者",
        description: "成功と効率を追求し、適応力があり、イメージと達成に関心があります。",
        famousPeople: "トム・クルーズ、マドンナ、タイガー・ウッズ",
        temperament: "野心的で効率的、成功志向で自信に満ちている",
        loveTrait: "魅力的でカリスマ性がある、時に感情よりも達成を優先する",
        suitableJobs: "起業家、マーケター、経営者、セールスマン",
        catchphrase: "結果が全て"
    },
    "type4": {
        name: "個性派",
        description: "真実性とユニークさを重視し、感情豊かで、しばしば他と違うと感じます。",
        famousPeople: "ヴィンセント・ヴァン・ゴッホ、シルヴィア・プラス、ビョーク",
        temperament: "感受性が強く創造的、情熱的で独自性がある",
        loveTrait: "深い感情的なつながりを求め、理想の恋愛を追求する",
        suitableJobs: "アーティスト、ライター、デザイナー、音楽家",
        catchphrase: "誰も私を本当に理解していない"
    },
    "type5": {
        name: "思想家",
        description: "知識と理解を追求し、独立性を持ち、参加するよりも観察することを好みます。",
        famousPeople: "アルベルト・アインシュタイン、スティーブン・ホーキング、ビル・ゲイツ",
        temperament: "分析的で知的、独立心が強く、プライバシーを重視する",
        loveTrait: "感情的な距離を保ちつつも深い知的つながりを求める",
        suitableJobs: "研究者、エンジニア、プログラマー、哲学者",
        catchphrase: "知ることが力だ"
    },
    "type6": {
        name: "忠実者",
        description: "安全と準備を重視し、忠実で、危険に対して警戒心があります。",
        famousPeople: "トム・ハンクス、ジョージ・W・ブッシュ、ジェニファー・アニストン",
        temperament: "忠実で責任感があり、信頼性が高く慎重",
        loveTrait: "献身的でパートナーに忠実、時に不安や疑念を抱くことも",
        suitableJobs: "安全管理者、リスクアナリスト、弁護士、セキュリティ専門家",
        catchphrase: "最悪の事態に備えておく"
    },
    "type7": {
        name: "活動家",
        description: "楽しさと新しい経験を追求し、楽観的で、制限や否定的感情を嫌います。",
        famousPeople: "ロビン・ウィリアムズ、リチャード・ブランソン、スティーブン・スピルバーグ",
        temperament: "活発で冒険的、楽観的で多才",
        loveTrait: "楽しく刺激的なパートナー、時に深い関係を避けることも",
        suitableJobs: "起業家、旅行ガイド、イベントプランナー、マーケター",
        catchphrase: "人生は楽しむためにある"
    },
    "type8": {
        name: "挑戦者",
        description: "コントロールと力を求め、直接的で、自分と大切な人を守ります。",
        famousPeople: "ドナルド・トランプ、マーティン・ルーサー・キング、アーノルド・シュワルツェネッガー",
        temperament: "強く自信に満ち、決断力があり率直",
        loveTrait: "情熱的で保護的、時に支配的になることも",
        suitableJobs: "経営者、軍人、起業家、弁護士",
        catchphrase: "自分の人生は自分でコントロールする"
    },
    "type9": {
        name: "平和主義者",
        description: "内外の平和を追求し、穏やかで、環境に溶け込み、対立を調停する傾向があります。",
        famousPeople: "ダライ・ラマ、ミスター・ロジャース、ケアリー・グラント",
        temperament: "穏やかで受容的、調和を好み対立を避ける",
        loveTrait: "安定した穏やかなパートナー、時に自分の意見を抑えることも",
        suitableJobs: "カウンセラー、調停者、作家、マッサージセラピスト",
        catchphrase: "平和が一番大切"
    }
};

// テスト状態管理
let currentQuestion = 0;
let answers = {};

// DOM要素
document.addEventListener('DOMContentLoaded', function() {
    const startTestBtn = document.getElementById('start-test');
    const testIntro = document.getElementById('test-intro');
    const testQuestions = document.getElementById('test-questions');
    const testResults = document.getElementById('test-results');
    const questionContainer = document.getElementById('question-container');
    const currentQuestionEl = document.getElementById('current-question');
    const progressBar = document.getElementById('progress-bar');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    // モバイルメニュートグル
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // モバイルメニューリンククリック時に閉じる
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // テスト開始
    startTestBtn.addEventListener('click', function() {
        testIntro.classList.add('hidden');
        testQuestions.classList.remove('hidden');
        showQuestion(0);
    });

    // 前の質問へ
    prevBtn.addEventListener('click', function() {
        if (currentQuestion > 0) {
            showQuestion(currentQuestion - 1);
        }
    });

    // 次の質問へ
    nextBtn.addEventListener('click', function() {
        // 選択肢が選択されているか確認
        const selected = document.querySelector('input[name="answer"]:checked');
        if (!selected && currentQuestion < questions.length) {
            alert('選択肢を選んでください');
            return;
        }
        
        // 回答を保存
        if (currentQuestion < questions.length) {
            const selected = document.querySelector('input[name="answer"]:checked');
            if (selected) {
                answers[currentQuestion + 1] = selected.value;
            }
        }

        // 次の質問を表示するか結果を表示
        if (currentQuestion < questions.length - 1) {
            showQuestion(currentQuestion + 1);
        } else {
            showResults();
        }
    });

    // 質問を表示する関数
    function showQuestion(questionIndex) {
        currentQuestion = questionIndex;
        const question = questions[questionIndex];
        
        currentQuestionEl.textContent = questionIndex + 1;
        progressBar.style.width = `${((questionIndex + 1) / questions.length) * 100}%`;
        
        questionContainer.innerHTML = `
            <div class="mb-6">
                <div class="mb-6">
                    <label class="block w-full p-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 mb-3">
                        <input type="radio" name="answer" value="A" class="mr-2" ${answers[question.id] === 'A' ? 'checked' : ''}>
                        <span class="font-medium">${question.optionA}</span>
                    </label>
                </div>
                <div>
                    <label class="block w-full p-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100">
                        <input type="radio" name="answer" value="B" class="mr-2" ${answers[question.id] === 'B' ? 'checked' : ''}>
                        <span class="font-medium">${question.optionB}</span>
                    </label>
                </div>
            </div>
        `;
        
        // 前へボタンの表示制御
        if (questionIndex > 0) {
            prevBtn.classList.remove('hidden');
        } else {
            prevBtn.classList.add('hidden');
        }
        
        // 最後の質問の場合、「次へ」を「結果を見る」に変更
        if (questionIndex === questions.length - 1) {
            nextBtn.textContent = '結果を見る';
        } else {
            nextBtn.textContent = '次へ';
        }
    }

    // 結果を計算して表示する関数
    function showResults() {
        testQuestions.classList.add('hidden');
        testResults.classList.remove('hidden');
        
        // スコア計算
        const scores = {
            "type1": 0, "type2": 0, "type3": 0, "type4": 0, "type5": 0, 
            "type6": 0, "type7": 0, "type8": 0, "type9": 0
        };
        
        // 各回答に対してスコアを加算
        for (const [questionId, answer] of Object.entries(answers)) {
            const answerKey = `${questionId}${answer}`;
            
            for (const [type, keys] of Object.entries(scoringKey)) {
                if (keys.includes(answerKey)) {
                    scores[type]++;
                }
            }
        }
        
        // 最も高いスコアを持つタイプを特定
        let maxScore = 0;
        let dominantType = null;
        
        for (const [type, score] of Object.entries(scores)) {
            if (score > maxScore) {
                maxScore = score;
                dominantType = type;
            }
        }
        
        // 上位2タイプのスコアを計算（サブタイプ用）
        const sortedTypes = Object.entries(scores)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 2);
        
        const primaryType = sortedTypes[0][0];
        const primaryTypeInfo = typeDetails[primaryType];
        const secondaryType = sortedTypes[1][0];
        const secondaryTypeInfo = typeDetails[secondaryType];
        
        // 結果表示
        testResults.innerHTML = `
            <h2 class="text-2xl font-bold mb-6 text-center">あなたのエニアグラムタイプ</h2>
            
            <div class="bg-accent p-6 rounded-lg mb-8">
                <h3 class="text-xl font-bold mb-2 text-primary">タイプ${primaryType.replace('type', '')} - ${primaryTypeInfo.name}</h3>
                <p class="mb-4">${primaryTypeInfo.description}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                        <h4 class="font-semibold mb-2">代表的な人物</h4>
                        <p>${primaryTypeInfo.famousPeople}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">気質と特徴</h4>
                        <p>${primaryTypeInfo.temperament}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">恋愛の特徴</h4>
                        <p>${primaryTypeInfo.loveTrait}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">適した職業</h4>
                        <p>${primaryTypeInfo.suitableJobs}</p>
                    </div>
                    <div>
                        <h4 class="font-semibold mb-2">口癖</h4>
                        <p>"${primaryTypeInfo.catchphrase}"</p>
                    </div>
                </div>
            </div>
            
            <div class="bg-gray-100 p-6 rounded-lg mb-8">
                <h3 class="text-lg font-bold mb-2">サブタイプ: タイプ${secondaryType.replace('type', '')} - ${secondaryTypeInfo.name}</h3>
                <p>${secondaryTypeInfo.description}</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                ${Object.entries(scores).map(([type, score]) => `
                <div class="bg-white p-3 rounded-lg shadow-sm">
                    <div class="flex justify-between items-center mb-2">
                        <span class="font-medium">タイプ${type.replace('type', '')}</span>
                        <span class="text-sm">${Math.round((score / 6) * 100)}%</span>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-primary h-2 rounded-full" style="width: ${(score / 6) * 100}%"></div>
                    </div>
                </div>
                `).join('')}
            </div>
            
            <div class="flex flex-col md:flex-row gap-4 mt-8">
                <a href="index.html" class="bg-gray-200 hover:bg-gray-300 text-dark font-medium py-3 px-6 rounded-lg shadow-md transition-all text-center">
                    ホームに戻る
                </a>
                <button id="retake-test" class="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all">
                    テストをやり直す
                </button>
                <button id="share-results" class="bg-secondary hover:bg-secondary/90 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all">
                    結果をシェアする
                </button>
            </div>
        `;
        
        // テスト再受験ボタン
        document.getElementById('retake-test').addEventListener('click', function() {
            currentQuestion = 0;
            answers = {};
            testResults.classList.add('hidden');
            testIntro.classList.remove('hidden');
        });
        
        // 結果シェアボタン
        document.getElementById('share-results').addEventListener('click', function() {
            const shareText = `私のエニアグラムタイプは「タイプ${primaryType.replace('type', '')} - ${primaryTypeInfo.name}」でした！あなたも無料でテストしてみませんか？`;
            const shareUrl = window.location.origin + '/test.html';
            
            // シェア機能（実際の実装ではWeb Share APIを使用するなど）
            if (navigator.share) {
                navigator.share({
                    title: 'エニアグラム性格テスト結果',
                    text: shareText,
                    url: shareUrl,
                })
                .catch((error) => console.log('Error sharing', error));
            } else {
                // コピーアクション
                const tempInput = document.createElement('textarea');
                tempInput.value = `${shareText} ${shareUrl}`;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                alert('テキストがコピーされました。SNSでシェアできます。');
            }
        });
    }
}); 