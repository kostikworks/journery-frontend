import Header from "../../components/Header";

function Landing() {
    return (
        <>
            <Header />
            
            <div className="max-w-4xl mx-auto px-6 py-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                    Lux facta est
                </h1>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                    Lorem ipsum dolor sit amet. Eos modi unde sit dolorum nulla aut placeat nesciunt aut voluptatem quis! Ut aspernatur quidem nam tenetur sapiente qui facere distinctio aut libero internos. Et iste quisquam qui esse molestias ex voluptas sapiente sed adipisci deserunt ut consectetur minima et repellat tempore id maxime quam. Ut voluptas maxime ut temporibus maiores aut quis soluta rem debitis earum eum perferendis enim.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    Et vitae culpa eum dignissimos quia quo dolore tenetur est minima voluptatibus sed omnis dolores vel amet quas. Et debitis reiciendis aut optio obcaecati rem ratione iusto est velit molestiae non esse velit et sunt dolorem! Et expedita dolorem et amet dolores et quia minus 33 iure galisum.
                </p>
                
                {/* New section */}
                <div className="mt-16 pt-12 border-t border-gray-200">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Lorem ipsum
                    </h2>
                    
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        Sed autem dolorem et galisum internos est sint laudantium eos cupiditate quos et dolorem tempore. Et optio galisum et quia sunt qui velit consequatur ad quia deleniti. Ut quaerat distinctio et magni soluta qui dolore laborum.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-[#6f79d9] text-white font-medium rounded-lg hover:bg-[#6772d1] transition-colors">
                            Learn More
                        </button>
                        <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Landing;