@@ .. @@
-import { ArrowRight, Code, Database, Globe } from 'lucide-react'
-import Link from 'next/link'
-import TechStack from '@/components/TechStack'
+import { ArrowRight, Code, Database, Globe } from 'lucide-react'
+import Link from 'next/link'
+import { useTranslations } from 'next-intl'
+import TechStack from '@/components/TechStack'

-export default function Home() {
+export default function Home() {
+  const t = useTranslations('home')
+
   return (
     <>
       {/* Hero Section */}
@@ .. @@
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
-              Olá, eu sou{' '}
-              <span className="text-blue-600">Seu Nome</span>
+              {t('greeting')}{' '}
+              <span className="text-blue-600">{t('title')}</span>
             </h1>
             <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
-              Desenvolvedor Full Stack especializado em{' '}
+              {t.rich('subtitle', {
+                angular: (chunks) => (
+                  <span className="font-semibold text-blue-600">{chunks}</span>
+                ),
+                dotnet: (chunks) => (
+                  <span className="font-semibold text-blue-600">{chunks}</span>
+                )
+              })}
+            </p>
+            <div className="flex flex-col sm:flex-row gap-4 justify-center">
+              <Link
+                href="/curriculo"
+                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
+              >
+                {t('viewResume')}
+                <ArrowRight size={20} className="ml-2" />
+              </Link>
+              <Link
+                href="/blog"
+                className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors"
+              >
+                {t('readBlog')}
+              </Link>
+            </div>
+          </div>
+        </div>
+      </section>
+
+      {/* About Section */}
+      <section className="py-16 bg-white">
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
+            <div>
+              <h2 className="text-3xl font-bold text-gray-900 mb-6">
+                {t('aboutTitle')}
+              </h2>
+              <div className="space-y-4 text-gray-600 leading-relaxed">
+                <p>{t('aboutText1')}</p>
+                <p>{t('aboutText2')}</p>
+                <p>{t('aboutText3')}</p>
+              </div>
+            </div>
+            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
+              <div className="bg-blue-50 p-6 rounded-lg text-center">
+                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
+                <h3 className="font-semibold text-gray-900 mb-2">{t('frontend')}</h3>
+                <p className="text-gray-600 text-sm">
+                  Angular, TypeScript, RxJS, Tailwind CSS
+                </p>
+              </div>
+              <div className="bg-green-50 p-6 rounded-lg text-center">
+                <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
+                <h3 className="font-semibold text-gray-900 mb-2">{t('backend')}</h3>
+                <p className="text-gray-600 text-sm">
+                  .NET Core, C#, Entity Framework, SQL Server
+                </p>
+              </div>
+              <div className="bg-purple-50 p-6 rounded-lg text-center sm:col-span-2">
+                <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
+                <h3 className="font-semibold text-gray-900 mb-2">{t('architecture')}</h3>
+                <p className="text-gray-600 text-sm">
+                  Clean Architecture, SOLID, DDD, Microservices, APIs RESTful
+                </p>
+              </div>
+            </div>
+          </div>
+        </div>
+      </section>
+
+      {/* Tech Stack */}
+      <TechStack />
+
+      {/* CTA Section */}
+      <section className="bg-gray-900 py-16">
+        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
+          <h2 className="text-3xl font-bold text-white mb-4">
+            {t('ctaTitle')}
+          </h2>
+          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
+            {t('ctaSubtitle')}
+          </p>
+          <a
+            href="mailto:seu.email@exemplo.com"
+            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
+          >
+            {t('contact')}
+            <ArrowRight size={20} className="ml-2" />
+          </a>
+        </div>
+      </section>
+    </>
+  )
+}