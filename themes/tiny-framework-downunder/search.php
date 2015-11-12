<?php
/**
 * The template for displaying Search Results pages
 *
 * @package Tiny_Framework
 * @since Tiny Framework 1.0
 */

get_header(); ?>

	<section id="primary" class="content-area">

		<?php tha_content_before(); // custom action hook ?>

		<main id="main" class="site-main" role="main" itemprop="mainContentOfPage" itemscope itemtype="http://schema.org/SearchResultsPage">

			<?php tha_content_top(); // custom action hook ?>

				<?php if (!empty(get_search_query() && !is_null(get_search_query()))) : ?>
							
					<?php if ( have_posts() ) : ?>

						<header class="page-header">

							<h1 class="page-title" itemprop="headline"><?php printf( esc_html__( 'Search Results for: %s', 'tinyframework' ), get_search_query() ); ?></h1>

						</header><!-- .page-header -->

						<?php
						// Start the Loop
						while ( have_posts() ) : the_post();

							/* Run the loop for the search to output the results.
							 *
							 * If you want to use separate file to load search content, use:
							 *
							 * get_template_part( 'template-parts/content', 'search' );
							 *
							 * and copy content-search.php from inc/examples/template-parts/ to template-parts folder.
							 *
							 * If you want to overload that file in a child theme then include a file
							 * called template-parts/content-search.php in a child theme folder and that will be used instead.
							 */
							get_template_part( 'template-parts/content', get_post_format() );

						// End the loop.
						endwhile;
						?>

						<?php tinyframework_archive_page_nav(); // Function located in: inc/template-tags.php ?>

					<?php else : // If no content, include the "No posts found" template. ?>
						<!--
							When there is no search results, pls display no results found on the page #157
							https://github.com/mr-bobz/talarts/issues/157
						-->	
						<!--?<php get_template_part( 'template-parts/content', 'none' ); ?> -->
						<h2 class="search-error" tabindex=0>No results found! Please try again with a different search keyword.</h2>

					<?php endif; // end have_posts() check ?>
				
				<?php else : // If no search query, include the "No posts found" template. ?>
						<!--
							When there is no search results, pls display no results found on the page #157
							https://github.com/mr-bobz/talarts/issues/157
						-->	
						<!--?<php get_template_part( 'template-parts/content', 'none' ); ?> -->
						<h2 class="search-error" tabindex=0>No search input was provided! Please try again with a different search keyword.</h2>

				<?php endif; // end get_search_query() check ?>	

			<?php tha_content_bottom(); // custom action hook ?>

		</main><!-- .site-main -->

		<?php tha_content_after(); // custom action hook ?>

	</section><!-- #primary -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>